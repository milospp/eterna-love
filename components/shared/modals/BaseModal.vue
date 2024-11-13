<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
    title?: string
}>()


const emit = defineEmits<{
    (e: 'confirm'): void
}>()

function test() {
    alert("Outside click")
}

function close() {
    emit("confirm")
}


</script>

<template>
    <VueFinalModal class="flex justify-center items-center" content-class="h-full sm:py-5 flex items-center"
        content-transition="vfm-zoom" overlay-transition="vfm-fade">
        <div class="flex flex-col max-w-3xl w-screen mx-4 rounded-lg space-y-2 max-h-full bg-white">
            <header class="p-6 border-b">
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

    </VueFinalModal>
</template>
