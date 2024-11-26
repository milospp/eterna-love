<template>
    <div :itemtype="image ? 'item' : 'placeholder'" :class="{ 'placeholder': !image }" class="relative">
        <div class="hover:scale-105 transition-all">
            <!-- {{ id }} -->
            <div>
                <div v-if="image" class="group image-item">
                    <div v-if="location == 'MAIN_PAPER'"
                        class="handle absolute inset-0 highlight-overlay transition-all hidden group-hover:block opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black bg-opacity-30">
                        <div
                            class="grid content-evenly h-full gap-1 sm:gap-2 md:gap-5 p-1 sm:p-2 aspect-square mx-auto">
                            <div>
                                <button @click="removeItem()" class=" py-[6%] px-[24%] bg-black text-white mx-auto block bg-opacity-30
                                    hover:bg-opacity-40 rounded-full">
                                    <svg class="size-6 sm:size-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                            <div class="">

                                <button @click="editItem()"
                                    class="p-[10%] px-[20%] bg-black text-white mx-auto block bg-opacity-30 hover:bg-opacity-40 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" stroke-width="2">
                                            <path
                                                d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269c0 .578-.396 1.074-.935 1.286q-.128.052-.253.106c-.531.23-1.162.16-1.572-.249a1.27 1.27 0 0 0-1.794 0L4.412 5.446a1.27 1.27 0 0 0 0 1.794c.41.41.48 1.04.248 1.572a8 8 0 0 0-.105.253c-.212.539-.708.935-1.286.935C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14c.578 0 1.074.396 1.286.935q.052.128.105.253c.231.531.161 1.162-.248 1.572a1.27 1.27 0 0 0 0 1.794l1.034 1.034a1.27 1.27 0 0 0 1.794 0c.41-.41 1.04-.48 1.572-.249q.125.055.253.106c.539.212.935.708.935 1.286c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269c0-.578.396-1.074.935-1.287q.128-.05.253-.104c.531-.232 1.162-.161 1.571.248a1.27 1.27 0 0 0 1.795 0l1.034-1.034a1.27 1.27 0 0 0 0-1.794c-.41-.41-.48-1.04-.249-1.572q.055-.125.106-.253c.212-.539.708-.935 1.286-.935c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269c-.578 0-1.074-.396-1.287-.935a8 8 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572a1.27 1.27 0 0 0 0-1.794l-1.034-1.034a1.27 1.27 0 0 0-1.794 0c-.41.41-1.04.48-1.572.249a8 8 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27Z" />
                                            <path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z" />
                                        </g>
                                    </svg>
                                </button>
                            </div>

                        </div>
                        <!-- <div class="4 flex-col justify-between items-center p-4 h-full">
                            <button @click="removeItem()"
                                class="p-[12%] bg-black bg-opacity-30 hover:bg-opacity-40 rounded-full w-1/2 h-1/2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                            <button @click="editItem()"
                                class="p-[8%] bg-black bg-opacity-30 hover:bg-opacity-40 rounded-full w-1/3 h-1/3 text-white">
                                <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                                </svg>
                            </button>
                        </div> -->
                    </div>
                    <div class="w-100 h-auto transition-all">
                        <img :src="image.src" :alt="image.alt" :class="{
                            'aspect-square': colSpan === 1,
                            'aspect-[19/9]': colSpan === 2,
                            'aspect-[30/10]': colSpan === 3
                        }">
                    </div>
                </div>
                <template v-else>
                    <div @click="placeholderClick()"
                        class="placeholder-item w-100 border-2 border-dashed rounded-md border-gray-300 transition-all hover:bg-gray-200"
                        :class="{
                            'aspect-square': colSpan === 1,
                            'aspect-[19/9]': colSpan === 2,
                            'aspect-[30/10]': colSpan === 3
                        }">
                        <div class="flex flex-col items-center justify-center h-full">

                            <svg class="fill-[#DCDCDC]" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 0.5C12.3812 0.5 12.7469 0.651451 13.0165 0.921034C13.2861 1.19062 13.4375 1.55625 13.4375 1.9375V10.5625H22.0625C22.4437 10.5625 22.8094 10.714 23.079 10.9835C23.3486 11.2531 23.5 11.6188 23.5 12C23.5 12.3812 23.3486 12.7469 23.079 13.0165C22.8094 13.2861 22.4437 13.4375 22.0625 13.4375H13.4375V22.0625C13.4375 22.4437 13.2861 22.8094 13.0165 23.079C12.7469 23.3486 12.3812 23.5 12 23.5C11.6188 23.5 11.2531 23.3486 10.9835 23.079C10.714 22.8094 10.5625 22.4437 10.5625 22.0625V13.4375H1.9375C1.55625 13.4375 1.19062 13.2861 0.921034 13.0165C0.651451 12.7469 0.5 12.3812 0.5 12C0.5 11.6188 0.651451 11.2531 0.921034 10.9835C1.19062 10.714 1.55625 10.5625 1.9375 10.5625H10.5625V1.9375C10.5625 1.55625 10.714 1.19062 10.9835 0.921034C11.2531 0.651451 11.6188 0.5 12 0.5Z" />
                            </svg>
                            <span class="text-[0.5em] sm:text-xs font-thin pt-2 text-slate-400 text-center">
                                Klikni da odabereš dizajn <slot></slot>
                            </span>
                        </div>

                    </div>
                </template>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

import ModalItemsGalery from '~/components/shared/modals/ItemsGalery';


const props = defineProps({
    type: {
        type: String,
        required: false
    },

    location: {
        type: String,
        required: true,
    },

    id: {
        type: Number,
    },
    colSpan: {
        type: Number,
        default: 1
    }
})

const siteStore = useSiteStore();


const image = computed(() => {
    if (!props.type) return null
    return ALL_ITEM_TYPES.find((image) => image.type_id === props.type) || null
})


const { open: openGaleryModal, close } = useModal({
    component: ModalItemsGalery,
    attrs: {
        title: 'Odaberi komponentu',
        onConfirm(itemType: string) {
            updateItem(itemType)
            close()
        },
    },

})

function updateItem(type: string) {
    const item = siteStore.posterItems.find(item => item.id == props.id)
    if (item) item.type = type;
}


function placeholderClick() {
    openGaleryModal()
}

function editItem() {
    openGaleryModal()
}

function removeItem() {
    // if (props.id) siteStore.deletePosterItemAtIndex(props.id)
    const itemIndex = siteStore.posterEdit.posterItems.findIndex(item => item.id == props.id)
    siteStore.deletePosterItemAtIndex(itemIndex)

    // const item = siteStore.posterEdit.posterItems[itemIndex]
    // const size = (item.width || 1) * (item.height || 1)

    // siteStore.posterEdit.posterItems.splice(itemIndex, 1);
    // for (let i = 0; i < size; i++) {
    //     siteStore.posterEdit.posterItems.splice(itemIndex, 0, { id: -1, text: 0 });
    // }
    // siteStore.fixPosterItemSizing()


}

</script>

<style scoped>
.sortable-swap .highlight-overlay {
    opacity: 0.3;
    /* transition: all 0.2s ease; */

    background: radial-gradient(61.76% 61.76% at 78.34% 7.75%, rgba(255, 233, 32, 0.39) 27.79%, rgba(255, 255, 255, 0) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        , radial-gradient(72.73% 72.73% at -6.68% 10.43%, #5772FF 19.95%, rgba(255, 255, 255, 0) 85.5%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        , radial-gradient(94.65% 94.65% at -6.68% 10.43%, #FF5CB4 19.95%, rgba(255, 255, 255, 0) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        , radial-gradient(64.44% 64.44% at 24.33% 87.97%, #1F94FF 26.5%, rgba(255, 255, 255, 0) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        , radial-gradient(159.89% 159.89% at 105.08% 0%, #FED4FF 15.22%, rgba(255, 255, 255, 0) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        , linear-gradient(136.47deg, #9778F2 12.17%, #3E2F9A 95.83%);
    mix-blend-mode: normal;
}


.placeholder-item {
    background: white
}

.sortable-swap .placeholder-item {
    transition: all 2s ease;

    background: radial-gradient(61.76% 61.76% at 78.34% 7.75%, rgba(255, 233, 32, 0.39) 27.79%, rgba(255, 255, 255, 0) 100%), radial-gradient(72.73% 72.73% at -6.68% 10.43%, #5772FF 19.95%, rgba(255, 255, 255, 0) 85.5%), radial-gradient(94.65% 94.65% at -6.68% 10.43%, #FF5CB4 19.95%, rgba(255, 255, 255, 0) 100%), radial-gradient(64.44% 64.44% at 24.33% 87.97%, #1F94FF 26.5%, rgba(255, 255, 255, 0) 100%), radial-gradient(159.89% 159.89% at 105.08% 0%, #FED4FF 15.22%, rgba(255, 255, 255, 0) 100%), linear-gradient(136.47deg, #9778F2 12.17%, #3E2F9A 95.83%);
    mix-blend-mode: normal;
    border: none;
}

.sortable-swap .placeholder-item span,
.sortable-swap .placeholder-item svg {
    color: white;
}

.v-enter-active,
.v-leave-active {
    transition: transform 0.2s ease;
}

.placeholder-item.v-enter-from,
.image-item.v-leave-to {
    transform: scale(0);
    position: absolute;
}

.image-item.v-enter-from,
.placeholder-item.v-leave-to {
    transition: transform 0s ease;
    display: none
}
</style>