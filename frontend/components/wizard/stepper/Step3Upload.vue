<template>
    <div>
        <h1 class=" text-3xl text-white font-light mb-8 text-center">
            <template v-if="siteStore.hasAnyResult">Možete dodati više chatova</template>
            <template v-else>Odaberite društvenu mrežu</template>

        </h1>

        <div class="flex items-center justify-center gap-4">
            <div v-for="social in socials" @click="onSelectedSocial(social)">
                <input type="radio" name="layout" :id="'layout_' + social" class="peer hidden"
                    :checked="selectedSocial == social" :value="social">
                <label :for="'layout_' + social" class="cursor-pointer">
                    <div class="peer-checked:p-5">
                        <WizardButtonSocial :socialName="social" :finished="siteStore.chatResults[social] != null"
                            :active="selectedSocial == social" />
                    </div>
                </label>
            </div>
        </div>


        <div class="mb-32">
            <Transition name="reveal">
                <div v-if="selectedSocial" class="content flex flex-col mt-3 mb-12">
                    <!-- <div class=" flex flex-col items-center w-100"> -->

                    <div>
                        <div v-if="minimisedTutorialSlides">
                            <button @click="minimisedTutorialSlides = false"
                                class="mb-3 p-5 block w-full text-white text-center">
                                Prikaži uputstvo
                            </button>
                        </div>
                        <div v-else class="mt-20">
                            <div class="relative min-h-14">

                                <Transition name="slide-up">
                                    <h1 :key="tutorialTitle"
                                        class="absolute text-white opacity-60 text-lg text-center w-full bottom-0">
                                        {{ tutorialTitle }}
                                    </h1>
                                </Transition>
                                <h1 :key="tutorialTitle" class="opacity-0 text-lg text-center">
                                    {{ tutorialTitle }}
                                </h1>
                            </div>
                            <WizardMiscTutorialSlideShow :social="selectedSocial" class="my-5"
                                @changed="updateTutorialTitle" />
                        </div>
                    </div>

                    <div class="flex flex-col items-center">

                        <WizardLoader :social="selectedSocial" @fileLoaded="fileLoadedHandler"
                            @fileSelected="fileSelectedHandler" />


                        <!-- <span v-if="!siteStore.chatResults[selectedSocial]" @click="openFileHelpModal()"
                            class="cursor-pointer text-white text-center mt-4">
                            Koji fajl treba da dodam?
                        </span> -->
                    </div>

                    <!-- </div> -->
                </div>
            </Transition>

            <div v-if="siteStore.hasAnyResult" class="mt-4 mb-32 mt-12">
                <hr class="mx-auto w-96 max-w-full mb-8 border-blue-500">
                <SharedButtonsAction @click="sbutmiResults" class="mx-auto px-16 py-8 font-bold">
                    <span>
                        Napravi poster
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>

                </SharedButtonsAction>
            </div>
        </div>




        <!-- <pre>{{ siteStore.chatResults }}</pre> -->


        <div v-if="!siteStore.hasAnyResult" class="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-20 sm:gap-8">
            <div class="flex flex-col items-center justify-center w-full">
                <span class="text-white mt-2">Video uputstvo</span>
                <div data-vjs-player class="h-full">
                    <video ref="videoTutorial" controls class="video-js w-full h-auto aspect-video border-white mt-2"
                        poster="https://cdna.artstation.com/p/assets/images/images/027/991/786/large/craig-peacock-tutorial-wallpaper.jpg?1593165601">
                        <!-- <source src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_5mb.mp4"
                        type="video/mp4"> -->
                    </video>
                </div>

            </div>

            <div class="flex flex-col items-center justify-center p-5">
                <img class="w-2/3 sm:w-auto sm:p-8" src="/public/images/upload-scheme-eterna-love-chat.svg"
                    alt="Chats are not shared with us. All processing is on your computer" />
                <span class="text-slate-100 px-4 md:px-6 sm:px-10 mt-4 font-thin">Statistika se računa na vašem uređaju,
                    mi dobijamo samo podatke za grafike.</span>
                <span class="text-slate-100 mt-4">Pročitaj više.</span>
            </div>
        </div>

    </div>

</template>

<script lang="ts" setup>
import { active } from 'sortablejs';
import FileHelp from '~/components/shared/modals/FileHelp.vue';

import videojs from 'video.js';
import 'video.js/dist/video-js.css'

const emit = defineEmits(['submitedResults']);

const siteStore = useSiteStore();

const minimisedTutorialSlides = ref(true);



const socials: SocialNetworkType[] = ['instagram', 'facebook', 'whatsapp', 'telegram'];

// const selectedSocial = ref(socials[0]);
const selectedSocial: Ref<SocialNetworkType | null> = ref(null);
const tutorialTitle = ref('')

const player = ref()
const videoTutorial = useTemplateRef('videoTutorial')


function changedLayout(i: any) {
    let newLayout = AVAILABLE_LAYOUT_TYPES.find(x => x.elementCount == i)
        || AVAILABLE_LAYOUT_TYPES.find(x => x.elementCount > i)
        || AVAILABLE_LAYOUT_TYPES[0];

    siteStore.posterEdit.layout = newLayout
}

onMounted(() => {
    if (siteStore.posterEdit.layout == undefined) changedLayout(12)

    let options = {
        autoplay: false,
        controls: true,
        responsive: true,
        sources: [
            {
                src:
                    'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_5mb.mp4',
                type: 'video/mp4'
            }
        ]
    }

    if (videoTutorial.value) {

        player.value = videojs(videoTutorial.value, options, () => {
        });
    }
})

function onSelectedSocial(social: SocialNetworkType) {
    selectedSocial.value = social;
    if (siteStore.chatResults[social]) {
        minimisedTutorialSlides.value = true;
    } else {
        minimisedTutorialSlides.value = false;
    }
}

function fileLoadedHandler() {
    selectedSocial.value = null
}

function fileSelectedHandler() {

    // minimisedTutorialSlides.value = true;
}

function sbutmiResults() {
    emit('submitedResults');
}


function updateTutorialTitle(title: string) {
    tutorialTitle.value = title
}


// MODALS
const { open: openFileHelpModal, close: closeFileHelpModal } = useModal({
    component: FileHelp,
    attrs: {
        title: "Kako preuzeti chat",
        onConfirm() {
            closeFileHelpModal()
        },
    },

})

</script>

<style scoped>
.reveal-enter-active,
.reveal-leave-active {
    transition: max-height 0.15s ease, transform 0.25s ease 0.1s;
    overflow: hidden;
}


.reveal-enter-from,
.reveal-leave-to {
    max-height: 0;
    transform: scale(0);

}

.reveal-enter-to,
.reveal-leave-from {
    max-height: 120vh;
    transform: scale(1);

}
</style>