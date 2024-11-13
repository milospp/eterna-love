<template>
    <div class="w-full h-full bg-gray-50 p-[4%] flex flex-col overflow-hidden select-none">
        <!-- <SharedModalsBaseModal v-if="modal.show.value">EEj</SharedModalsBaseModal> -->
        <!-- <button @click="shuffle()">SHUFFLE</button> -->
        <header class="flex justify-between items-center">
            <div class="relative">

                <button @click="handleNamePlaceholderClick"
                    class="absolute z-20 top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-transparent hover:bg-slate-200 hover:bg-opacity-50 rounded-[11px]">
                    <span class="text-[0.6em] sm:text-xs text-slate font-thin">{{ posterName }}</span>
                </button>
                <div>
                    <svg width="202" height="47" viewBox="0 0 202 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="200" height="45" rx="13" fill="#F2F2F2" stroke="#B8AAAA"
                            stroke-width="2" stroke-dasharray="17 17" />
                    </svg>
                </div>
            </div>

            <div class="w-[195px] bg-red-50">
            </div>

            <div>
                <img loading="lazy" class="h-auto w-auto" src="/assets/static/EternaLoveLogo.svg" alt="Eterna Love" />
            </div>
        </header>


        <section class="pt-1 h-full flex items-center">
            <TransitionGroup name="fade" tag="div" :class="customClass"
                class="grid relative w-full h-full items-center content-center" id="posterGrid">

                <WizardCanvasItem v-for="item, index in siteStore.posterItems" :key="item.id" v-bind:test="item.id"
                    :type="item.type" :id="item.id" :location="'MAIN_PAPER'">
                    {{ item.text }}
                </WizardCanvasItem>

            </TransitionGroup>
        </section>
    </div>
</template>

<script lang="ts" setup>

import Sortable, { Swap } from 'sortablejs'
import PaperName from '~/components/shared/modals/PaperName.vue';
import { useSiteStore, type SiteState } from '~/stores/siteStore';

const siteStore = useSiteStore();

const sortable = ref()

const posterName = computed(() => {
    if (siteStore.posterName1) {
        return `${siteStore.posterName1} & ${siteStore.posterName2}`
    } else {
        return "Klikni da dodaš ime"
    }
})

const customClass = computed(() => {
    let style = ""
    if (siteStore.posterEdit.layout?.dimX == 1) {
        style += "grid-cols-1 gap-4"
    } else if (siteStore.posterEdit.layout?.dimX == 2) {
        style += "grid-cols-2 gap-8"
    } else {
        style += "grid-cols-3 gap-[3%]"
    }

    if (siteStore.posterEdit.layout?.elementCount == 12) style += " px-[4%] lg:px-[3%] xl:px-0 xl:gap-[2%]"
    if (siteStore.posterEdit.layout?.elementCount == 9) style += " gap-y-[5%]"
    if (siteStore.posterEdit.layout?.elementCount == 6) style += " gap-x-[5%] gap-y-[2%] px-[8%]"
    if (siteStore.posterEdit.layout?.elementCount == 4) style += " gap-y-[10%]"
    if (siteStore.posterEdit.layout?.elementCount == 2) style += " px-[24%] sm:px-[18%]"

    return style
})


const { open: openNameModal, close } = useModal({
    component: PaperName,
    attrs: {
        title: "Unesite vaše ime",
        onConfirm(name1, name2) {
            siteStore.posterName1 = name1
            siteStore.posterName2 = name2

            close()
        },
    },

})

function handleNamePlaceholderClick() {
    openNameModal()
}


function loadSortable() {
    const posterGrid = document.getElementById('posterGrid');
    if (posterGrid) {
        sortable.value = new Sortable(posterGrid, {
            group: {
                name: 'poster-items',
                pull: true,
                put: true,
            },
            swap: true,
            animation: 0,
            ghostClass: 'sortable-ghost',
            swapClass: 'sortable-swap',
            filter: '.placeholder',

            onStart(event) {
                if (event.item.getAttribute("itemtype") == "item") {
                    siteStore.designerShowDeleteItemSection = true;
                }
            },
            onEnd(event) {
                siteStore.designerShowDeleteItemSection = false;
            },

            onBeforeSwap(source: HTMLElement, target: HTMLElement) {
                let sourceIndex: number = Sortable.utils.index(source);
                let targetIndex: number = Sortable.utils.index(target);
                if (sourceIndex < 0 || targetIndex < 0) return false

                if (target.parentElement?.id == "itemDeleteZone") {
                    siteStore.posterEdit.posterItems[sourceIndex].type = undefined;

                } else if (target.parentElement?.id == "posterGrid") {
                    const temp: PosterItem = siteStore.posterEdit.posterItems[sourceIndex];
                    siteStore.posterEdit.posterItems[sourceIndex] = siteStore.posterEdit.posterItems[targetIndex];
                    siteStore.posterEdit.posterItems[targetIndex] = temp;

                }

                return false;
            },

            // onMove: function (evt) {
            //     let target = evt.related;
            //     // Dodaj ili menjaš stil za animaciju ako je potrebno
        });
    }  //     target.style.transition = 'all 0.2s ease'; // Animacija pokreta
    // }
}

function shuffle() {
    siteStore.posterEdit.posterItems = siteStore.posterEdit.posterItems.sort(() => Math.random() - 0.5);
}


onMounted(() => {
    loadSortable();
})
</script>

<style>
.sortable-ghost {
    opacity: 0.5;
    /* Element koji se vuče postaje providan */
    transform: scale(1.05);
    /* Element je malo uvećan tokom prevlačenja */
}



.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>