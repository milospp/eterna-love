<template>
    <SharedModalsBaseModal>
        <div v-for="i in [2, 5, 4]">

            <p class=" text-slate-500 text-xl font-thin mb-4">Broj poruka</p>
            <div class="grid grid-cols-4 gap-3 pb-8">
                <WizardCanvasItem @click="emit('confirm', type)" v-for="type in itemTypes.slice(i, i + i)" :type="type"
                    location="MODAL_GALERY" />
            </div>
        </div>
    </SharedModalsBaseModal>
</template>

<script lang="ts" setup>

const itemTypes = ref([
    "MSG_COUNT_BAR",
    "GN_HOURS",
    "TOP_EMOJI",
    "LAUGH_COUNT",
    "MSG_COUNT_HEART",
    "GM_HOURS",
    "MSG_TIME_BAR",
    "MOST_FREQUENT_WORDS",
]);

const emit = defineEmits<{
    (e: 'confirm', message: string): void
}>()
</script>

<style></style>