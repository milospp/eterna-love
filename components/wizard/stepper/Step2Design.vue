<template>
    <div>
        <h1 class=" text-3xl text-white font-light mb-5">Uredi svoj poster</h1>
        <div class="flex items-stretch">
            <div class=" border-indigo-950 border-8 aspect-paper sm:w-8/12 w-full">
                <WizardCanvasMainPaper />
            </div>
            <div class="hidden sm:w-4/12 sm:flex aspect-paper">
                <span class="p-4 m-auto">
                    <svg width="41" height="138" viewBox="0 0 41 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M40.1398 1.55915C39.8679 1.06492 39.5448 0.672806 39.1891 0.405262C38.8334 0.137717 38.4521 0 38.0669 0C37.6818 0 37.3005 0.137717 36.9448 0.405262C36.5891 0.672806 36.266 1.06492 35.994 1.55915L0.860157 65.244C0.587498 65.737 0.371174 66.3226 0.223576 66.9674C0.0759735 67.6121 0 68.3033 0 69.0014C0 69.6995 0.0759735 70.3907 0.223576 71.0354C0.371174 71.6802 0.587498 72.2658 0.860157 72.7588L35.994 136.444C36.5438 137.44 37.2895 138 38.0669 138C38.8444 138 39.5901 137.44 40.1398 136.444C40.6896 135.447 40.9985 134.096 40.9985 132.686C40.9985 131.277 40.6896 129.925 40.1398 128.929L7.073 69.0014L40.1398 9.07396C40.4125 8.58098 40.6288 7.99534 40.7764 7.35058C40.924 6.70583 41 6.01462 41 5.31656C41 4.61849 40.924 3.92729 40.7764 3.28253C40.6288 2.63777 40.4125 2.05213 40.1398 1.55915Z"
                            fill="white" />
                    </svg>
                </span>
                <div class="relative w-full bg-blue-950">
                    <WizardCanvasSideBarGalery />
                </div>
            </div>
        </div>

        <!-- <h1 @click="test">test1</h1>
        <h1 @click="test2">test2</h1> -->
        <!-- <pre>{{ siteStore.posterItems }}</pre> -->

        <!-- Alerts -->
        <SharedAlertWarning v-if="siteStore.hasDuplicateItems" class="w-full sm:w-2/3">Dodali ste dve iste komponente
        </SharedAlertWarning>
        <SharedAlertError v-if="siteStore.hasEmptyItems && triedSubmit" class="w-full sm:w-2/3">Niste popunili sve
            komponente
        </SharedAlertError>

        <!-- Buttons -->
        <div class="flex flex-wrap mt-4 gap-3">
            <SharedButtonsPlusMinusButton v-model="layoutNumer" :possibleValues="availableLayoutCounts"
                @changed="changedLayout">
            </SharedButtonsPlusMinusButton>

            <SharedButtonsButton @click="changeTheme" small class="px-4 py-2">
                <span class="hidden sm:block">Promeni temu</span>
                <svg class="h-6 max-w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                </svg>
            </SharedButtonsButton>
            <SharedButtonsButton @click="addRandomly()" small class="px-4 py-2">
                <span class="hidden sm:block">Dodaj nasumično</span>
                <svg class="h-8 max-w-6 max-h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path
                        d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>


            </SharedButtonsButton>
        </div>


        <div class="flex justify-between mt-14 mb-2">
            <div class="sm:flex hidden flex-col justify-center">

                <SharedButtonsOutlineAction class="p-2 px-4">
                    <svg width="7" height="11" viewBox="0 0 7 11" class="fill-inherit"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.8282 5.49995L6.12109 2.20706L4.70688 0.792847L-0.000226498 5.49995L4.70688 10.2071L6.12109 8.79285L2.8282 5.49995Z" />
                    </svg>
                    <span>Nazad</span>
                </SharedButtonsOutlineAction>
            </div>

            <div class="w-full sm:w-auto">

                <SharedButtonsAction @click="confirmItems" class="p-6 px-10 w-full justify-center">
                    <span></span>
                    <div class="flex items-center gap-5 justify-center sm:justify-between">

                        <span>Sledeći korak</span>
                        <svg width="8" height="12" viewBox="0 0 8 12" class="fill-inherit"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.47264 6.12504L0.626831 2.27924L2.27851 0.627563L7.77598 6.12504L2.27851 11.6225L0.626831 9.97085L4.47264 6.12504Z" />
                        </svg>
                    </div>
                    <span></span>

                </SharedButtonsAction>
            </div>

        </div>
    </div>

</template>

<script lang="ts" setup>
import PosterTheme from '~/components/shared/modals/PosterTheme.vue';

const emit = defineEmits(['itemsConfirmed']);

const siteStore = useSiteStore();

const layoutNumer = ref(siteStore.posterEdit.layout?.elementCount || 12)
const availableLayoutCounts = AVAILABLE_LAYOUT_TYPES.map(x => x.elementCount)
const triedSubmit = ref(false)


const { open: openThemeModal, close: closeThemeModal } = useModal({
    component: PosterTheme,
    attrs: {
        title: "Odaberi dizajn",
        onConfirm(theme: PosterTheme) {
            siteStore.posterTheme = theme
            closeThemeModal()
        },
    },

})


function test() {

    // siteStore.posterEdit.posterItems.splice(0, 1)
    siteStore.posterEdit.posterItems[0].width = 0
    siteStore.posterEdit.posterItems[1].width = 3


    // siteStore.posterEdit.posterItems.splice(1, 1)
    // siteStore.posterEdit.posterItems.splice(1, 1)




    // siteStore.posterEdit.posterItems[0].width = 2
    // siteStore.posterEdit.posterItems[1].width = 0
    // setTimeout(() => {
    //     siteStore.posterEdit.posterItems.slice(1, 1)

    // }, 200);

}


function test2() {
    siteStore.posterEdit.posterItems[0].width = 1
    siteStore.posterEdit.posterItems.splice(1, 0, { id: 15, type: undefined, width: 1, text: 2 })

    siteStore.posterEdit.posterItems[1].width = 1
}

function changeTheme() {
    openThemeModal()
}

function changedLayout(i: any) {
    let newLayout = AVAILABLE_LAYOUT_TYPES.find(x => x.elementCount == i)
        || AVAILABLE_LAYOUT_TYPES.find(x => x.elementCount > i)
        || AVAILABLE_LAYOUT_TYPES[0];

    siteStore.posterEdit.layout = newLayout
    siteStore.fixPosterItemSizing()
}

onMounted(() => {
    if (siteStore.posterEdit.layout == undefined) changedLayout(12)

    selectTheme()
})

function selectTheme() {
    if (siteStore.posterTheme) return
    setTimeout(() => { openThemeModal() }, 500)

}

function confirmItems() {
    triedSubmit.value = true

    if (siteStore.hasEmptyItems) return
    emit('itemsConfirmed');
}

function addRandomly() {
    let randomizedItems = siteStore.themedItems
        .map(item => {
            return { ...item }
        }).sort(() => Math.random() - 0.5)

    // let hasEmpty = siteStore.hasEmptyItems

    function applyRandomizedItems(randomElements, onlyEmpty = false) {
        siteStore.posterEdit.posterItems.forEach((item, index) => {
            if (onlyEmpty && item.type) return; // Skip if already has type

            let element = randomElements.pop()
            if (!element) return;
            item.type = element.type_id
            item.width = element.width
            item.height = element.height
        })
    }

    applyRandomizedItems(randomizedItems, false)
    siteStore.fixPosterItemSizing()
    randomizedItems = randomizedItems.filter(x => x.width === 1 && x.height === 1)
    applyRandomizedItems(randomizedItems, true)
}

</script>

<style scoped></style>