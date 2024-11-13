<template>
    <SharedModalsBaseModal :title="title" class="w-full">
        <!-- <template #header>{{ title }}</template> -->

        <div class="px-20">

            <p>Tvoje ime</p>
            <input v-model="name1" type="text" class="border rounded-md border-slate-300 p-5 mb-3">

            <p>Ime sagovornika</p>
            <input v-model="name2" type="text" class="border rounded-md border-slate-300 p-5">

        </div>
        <template #footer>
            <div>
                <LazySharedButtonsButton @click="emit('confirm', name1, name2)" class="ml-auto">
                    Potvrdi
                </LazySharedButtonsButton>
            </div>
        </template>
    </SharedModalsBaseModal>
</template>

<script lang="ts" setup>
defineProps<{
    title?: string
}>()

const name1 = ref('')
const name2 = ref('')

const emit = defineEmits<{
    (e: 'confirm', name1: string, name2: string): void
}>()
</script>

<style></style>