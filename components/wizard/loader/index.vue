<template>
    <input ref="fileUpload" type="file" name="chat" id="chat" @click="resetImageUploader"
        @change="inputFileChangeHandler" hidden multiple accept=".zip,.txt,.json">

    <template v-if="siteStore.chatResults[props.social]">
        <span @click="resetData" class="cursor-pointer text-white text-center">Resetuj za {{ props.social }}</span>
    </template>
    <template v-else>
        <SharedButtonsButton @click="openFileUpload" class="px-16 py-4 font-bold">
            <span>
                Dodaj fajl
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
        </SharedButtonsButton>
    </template>
</template>

<script lang="ts" setup>
import JSZip from 'jszip';
import {
    BlobReader,
    BlobWriter,
    TextReader,
    TextWriter,
    ZipReader,
    ZipWriter,
    type Entry,
} from '@zip.js/zip.js';
import FileHelp from '~/components/shared/modals/FileHelp.vue';
import ChatSelect from '~/components/shared/modals/ChatSelect.vue';
import type { ChatObject } from '~/utils/constants';
import { unicodeToLatin } from '~/utils/utils';
import type { SocialNetworkType } from '~/utils/constants';
import Social from '../button/Social.vue';


const inputFileUpload = useTemplateRef('fileUpload')
const emit = defineEmits(['fileSelected', 'fileLoaded'])
const chats: Ref<ChatObject[]> = ref([])
const modalLoading: Ref<boolean> = ref(false)
let chatsFilesMap: { [key: string]: any } = {}
const chatsModalStep = ref(0)
const loadingPercentage = ref(0)

const siteStore = useSiteStore();

const props = defineProps<{
    social: SocialNetworkType
}>();

const selectedSocial: Ref<SocialNetworkType> = ref(props.social);

let chats_prep: ChatObject[] = []

// MODALS
const { open: openFileUploadModal, close: closeFileUploadModal } = useModal({
    component: ChatSelect,
    attrs: {
        title: "Učitavanje poruka",
        chats: chats,
        loading: modalLoading,
        chatsModalStep: chatsModalStep,
        loadingPercentage: loadingPercentage,
        onConfirm() {
            closeFileUploadModal()
        },
        onChatSelected(chat?: ChatObject) {
            if (chat) {
                startAnalyse(chat)

            } else {
                chatsModalStep.value = 0
            }
        }
    },

})


function test() {
    alert("okej")
}

function resetData() {
    siteStore.chatResults[props.social] = null
}

function startAnalyse(chat: ChatObject) {
    chatsModalStep.value = 1
    loadingPercentage.value = 0

    modalLoading.value = false
    loadingPercentage.value = 5

    let chatFiles: Entry[] = chatsFilesMap[chat.chat_id].chats

    // if (chatFiles[0].getData) {
    //     chatFiles[0].getData(new TextWriter()).then((text: string) => {
    //         const messages = JSON.parse(text);
    //         checkSocialByContent(messages)
    //     })
    // }

    let analysis = new ChatAnalysis(selectedSocial.value);
    chatFiles.reduce((promise, file) => {
        return promise.then(() => {
            loadingPercentage.value += Math.round(90 / chatFiles.length);
            if (!file.getData) return

            return file.getData(new TextWriter()).then((text: string) => {
                analysis.analyiseChat(text);
            });
        });
    }, Promise.resolve()).then(() => {
        onAnalyseFinish(analysis)

    });


}

function onAnalyseFinish(analysis) {
    siteStore.chatResults[selectedSocial.value] = analysis.results;
    loadingPercentage.value = 100
    modalLoading.value = false
    closeModalAfterDelay()
    console.log('All files have been processed');
}

function closeModalAfterDelay() {
    setTimeout(() => {
        closeFileUploadModal().then(() => {
            emit('fileLoaded')
        })
    }, 1500);

}

function openFileUpload() {
    const fileUpload = inputFileUpload.value as HTMLInputElement;
    fileUpload.click();
}

function inputFileChangeHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files) return;

    const files = Array.from(target.files);
    if (isSingleZipFile(files)) {
        loadZipJS(files[0]);
    } else if (containsZipFile(files)) {
        alert("Selektujte jedan zip dokument ili fajlove samo fajlove chata");
    } else if (hasMultipleFileExtensions(files)) {
        alert("Morate selektovati isti tip chatova.");
    } else {
        loadTxtFiles(files);
    }
}

function isSingleZipFile(files: File[]): boolean {
    return files.length === 1 && files[0].name.includes(".zip");
}

function containsZipFile(files: File[]): boolean {
    return files.some(file => file.name.includes(".zip"));
}

function hasMultipleFileExtensions(files: File[]): boolean {
    const fileExtensions = new Set(files.map(file => file.name.split('.').pop()));
    return fileExtensions.size > 1;
}

function getChatIdName(fileName: string) {
    const lastUnderscoreIndex = fileName.lastIndexOf('_');
    if (lastUnderscoreIndex !== -1) {
        return fileName.substring(0, lastUnderscoreIndex);
    }
    return fileName
}


function storeZipChatReferences(files: Entry[]) {
    chatsFilesMap = {}

    let operation: (file: Entry) => { type: string | null, chatId: string } | null;
    switch (selectedSocial.value) {
        case "instagram":
        case "facebook":
            operation = getFacebookFileType
            break;

        case "whatsapp":
            operation = getWaFileType
            break;

        default:
            break;
    }

    files.forEach(file => {
        let result = operation(file)
        if (!result) return


        if (!chatsFilesMap[result?.chatId]) {
            chatsFilesMap[result?.chatId] = {
                chat_id: result?.chatId,
                files: [],
                photos: [],
                videos: [],
                audio: [],
                chats: [],
            }
        }

        switch (result.type) {
            case "photo":
                chatsFilesMap[result.chatId].photos.push(file)
                break;
            case "video":
                chatsFilesMap[result.chatId].videos.push(file)
                break;
            case "audio":
                chatsFilesMap[result.chatId].audio.push(file)
                break;
            case "chat":
                chatsFilesMap[result.chatId].chats.push(file)
                break;
            default:
                console.log('Unknown file type:', file.filename);
        }
    });
}

function getFacebookFileType(file: Entry): { type: string | null, chatId: string } | null {
    if (file.directory) return null


    const folderTokens = file.filename.split('/').filter(token => token !== '');
    const inboxIndex = folderTokens.indexOf('inbox');
    if (inboxIndex === -1) return null
    const usernameBetweenSlashes = folderTokens[inboxIndex + 1];

    const chatId = usernameBetweenSlashes
    const subFolder = folderTokens[inboxIndex + 2];

    let type = null
    if (folderTokens[inboxIndex + 3]) {
        switch (subFolder) {
            case 'photos':
            case 'gif':
                type = "photo"
                // chatsFilesMap[chatId].photos.push(file)
                break;
            case 'videos':
                type = "video"
                // chatsFilesMap[chatId].videos.push(file)
                break;
            case 'audio':
                type = "audio"
                // chatsFilesMap[chatId].audio.push(file)
                break;
            default:
                console.log('Unknown subfolder:', subFolder);
        }
    } else if (subFolder.match(/[^/]+\.json$/)) {
        type = "chat"
        // chatsFilesMap[chatId].chats.push(file)
    }

    return { type, chatId }
}

function getWaFileType(file: Entry): { type: string | null, chatId: string } | null {
    if (file.directory) return null
    if (file.filename.includes('__MACOSX')) return null

    let type = null
    if (file.filename.endsWith('.jpg') || file.filename.endsWith('.png') || file.filename.endsWith('.gif') || file.filename.endsWith('.webp')) {
        type = "photo"
    } else if (file.filename.endsWith('.mp4')) {
        type = "video"
    } else if (file.filename.endsWith('.opus')) {
        type = "audio"
    } else if (file.filename.match(/_chat\.txt$/)) {
        type = "chat"
    }

    let chatId = "0"
    return { type, chatId }
}

function loadTxtFiles(files: File[]) {
    modalLoading.value = true;
    chatsModalStep.value = 1;
    loadingPercentage.value = 5
    openFileUploadModal();

    let analysis = new ChatAnalysis(selectedSocial.value);

    const filePromises = files.map((file) => {
        return new Promise<void>((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                try {
                    loadingPercentage.value += Math.round(90 / files.length);
                    const text = event.target?.result as string;
                    const messages = JSON.parse(text);
                    analysis.analyiseChat(messages);
                    resolve();
                } catch (error) {
                    reject(error);
                }
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsText(file);
        });
    });

    // Čekamo da se svi fajlovi učitaju i analiziraju
    Promise.all(filePromises)
        .then(() => {
            onAnalyseFinish(analysis)
        })
        .catch((error) => {
            alert("Greška, proverite da li ste dobar fajl odabrali")
            console.error('An error occurred during file processing:', error);
        });
}

async function loadZipJS(file: any) {
    modalLoading.value = true
    openFileUploadModal()

    chats_prep = []
    chats.value = []
    chatsModalStep.value = 0

    let allFiles = await new ZipReader(new BlobReader(file)).getEntries({});
    const zipSocialType = checkZipSocialByFiles(allFiles, file.name)
    if (!changeSocialType(zipSocialType)) {
        modalLoading.value = false
        closeFileUploadModal()
        return
    }


    storeZipChatReferences(allFiles)
    generateChatList()
}

function changeSocialType(socialType: SocialNetworkType | null) {
    if (!socialType) {
        alert("Nije moguće analizirati ovaj tip fajla")
        return false
    }
    if (selectedSocial.value === socialType) return true

    if (siteStore.chatResults[socialType]) {
        alert(`Izabrali ste ${socialType} chatove, ali su već učitani`)
        return false
    }

    selectedSocial.value = socialType
    return true
}

function checkZipSocialByFiles(allFiles: Entry[], zipName: string): SocialNetworkType | null {
    const hasIgFbStructure = allFiles.some(file => file.filename.match(/(\/messages\/inbox\/)?[^/]+\/message_1\.json$/));
    if (hasIgFbStructure) {
        if (zipName.toLowerCase().includes("facebook")) return "facebook"
        if (zipName.toLowerCase().includes("instagram")) return "instagram"
        if (selectedSocial.value === "facebook") return "facebook"
        return "instagram"

    }

    const hasWaStructure = allFiles.some(file => file.filename.match(/_chat\.txt$|\/[^/]+\/_chat\.txt$/));
    if (hasWaStructure) {
        return "whatsapp"
    }


    const hasTelStructure = allFiles.some(file => file.filename.match(/result\.json$/));
    if (hasTelStructure) {
        return "instagram"
    }


    return null
}

function checkSocialByContent(content: Object): SocialNetworkType {
    // TODO
    selectedSocial.value = props.social
    return selectedSocial.value
}

function resetImageUploader() {
    const fileUpload = inputFileUpload.value as HTMLInputElement;
    fileUpload.value = '';
}

function processMessageJSON(chatsData) {
    let chat;
    switch (selectedSocial.value) {
        case 'facebook':
        case 'instagram':
            chat = chatsData.chats.find(f => f.filename.includes('message_1.json'))

            if (!chat) {
                console.log('No chat found for:', chatsData.chat_id);
                chat = chatsData.chats[0]
            }

            return chat.getData(new TextWriter()).then((text: string) => {
                chat = getFacebookChatInfo(text, chatsData.chat_id)
                chats_prep.push(chat)

            })

        case 'whatsapp':
            chat = chatsData.chats.find(f => f.filename.includes('_chat.txt'))
            if (!chat) {
                console.log('No chat found for:', chatsData.chat_id);
                chat = chatsData.chats[0]
            }

            return chat.getData(new TextWriter()).then((text: string) => {
                chat = getWhatsappChatInfo(text, chatsData.chat_id)
                chats_prep.push(chat)

            })
    }

}

function getFacebookChatInfo(text: string, chat_id: string) {
    const message = JSON.parse(text)

    let chat_title = escapeString(message.title)
    let isGroup = message.participants.length > 2
    let lastMessageDate = message.messages[0].timestamp_ms

    let chatName = getChatIdName(chat_id)
    let chat: ChatObject = {
        chat_id: chat_id,
        chat_name: chatName,
        chat_title: chat_title,
        indexed_name: unicodeToLatin(chat_title).toLowerCase() + ' ' + unicodeToLatin(chatName).toLowerCase(),
        isGroup: isGroup,
        last_chat_timestamp: lastMessageDate,

    }

    return chat
}

function getWhatsappChatInfo(text: string, chat_id: string) {
    let isGroup = false;
    let chatName = getChatIdName(chat_id)
    let chat: ChatObject = {
        chat_id: chat_id,
        chat_name: chatName,
        isGroup: isGroup,

    }

    return chat
}

function generateChatList() {
    const promises = Object.values(chatsFilesMap).map(chatData => {
        return processMessageJSON(chatData)
    })

    Promise.all(promises).then(() => {
        chats_prep.sort((a, b) => {
            return (b.last_chat_timestamp ?? 0) - (a.last_chat_timestamp ?? 0)
        })

        modalLoading.value = false
        chats.value = chats_prep

        if (chats_prep.length == 1) {
            startAnalyse(chats_prep[0])
        }

    }).catch(() => {
        modalLoading.value = false
    })
}


</script>

<style></style>