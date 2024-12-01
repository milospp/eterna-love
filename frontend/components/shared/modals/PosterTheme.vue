<template>
    <SharedModalsBaseModal>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-10 py-2">
            <button @click="selectTheme(theme)" v-for="theme in ALL_THEMES">
                <div class="group border shadow-lg hover:shadow-xl col-span-1 bg-white rounded-md lg:p-4 sm:p-3 p-2">
                    <div class="border border-slate-300 bg-gray-50">
                        <img :src="theme.src" class="w-full aspect-paper" />
                    </div>
                    <div class="flex justify-between items-center mt-3">
                        <p class=" font-semibold text-gray-600 text-sm">{{ theme.name }}</p>
                    </div>
                </div>

            </button>
        </div>
    </SharedModalsBaseModal>
</template>

<script lang="ts" setup>



const emit = defineEmits<{
    (e: 'confirm', message: PosterTheme): void
}>()

function selectTheme(theme: PosterTheme) {
    emit('confirm', theme)
}

</script>

<style></style>