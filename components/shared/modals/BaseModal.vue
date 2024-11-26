<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
    title?: string
    modalStyle?: string
}>()

const visible = ref(true)

const emit = defineEmits<{
    (e: 'confirm'): void
}>()

function test() {
    alert("Outside click")
}



</script>

<template>
    <VueFinalModal v-slot="{ close }" class="flex justify-center items-center" content-class="absolute inset-0"
        content-transition="vfm-zoom" overlay-transition="vfm-fade" overlay-class="backdrop-blur-sm">
        <div class="absolute inset-0 flex items-center">
            <div @click="close" class="absolute inset-0"></div>
            <div class="flex flex-col w-screen rounded-lg space-y-2 mx-auto max-h-full bg-white z-10"
                :class="[modalStyle, { 'max-w-3xl': !modalStyle?.includes('max-w-') }]">
                <header class=" p-6 border-b">
                    <slot name="header">
                        <div class="flex justify-between">
                            <h1 class="text-xl">{{ title }}</h1>

                            <button @click="close" class="text-gray-500 hover:text-gray-700">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>

                            </button>
                        </div>
                    </slot>
                </header>
                <div class="p-6 scroll-auto h-auto overflow-auto">
                    <slot />
                </div>

                <footer v-if="$slots.footer" class="p-6 border-t">
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>

    </VueFinalModal>
</template>
