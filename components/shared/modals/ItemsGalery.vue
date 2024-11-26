<template>
    <SharedModalsBaseModal>
        <div v-for="(items, groupId) in groupedItems">
            <p class=" text-slate-500 text-xl font-thin mb-4">{{ groupId }}</p>

            <div class="grid grid-cols-4 gap-3 pb-8">
                <WizardCanvasItem @click="emit('confirm', item.type_id)" v-for="item in items" :type="item.type_id"
                    location="MODAL_GALERY" />
            </div>
        </div>

        <SharedButtonsButton v-if="siteStore.posterTheme" @click="showAllThemes" class="mx-auto px-6 py-4">Prikaži sve
            teme</SharedButtonsButton>

    </SharedModalsBaseModal>
</template>

<script lang="ts" setup>
import type { CategoriesType, ItemType } from '~/utils/constants';

const siteStore = useSiteStore()


const groupedItems = computed(() => {
    let groups: Record<CategoriesType, ItemType[]> = {
        'ACTIVITY': [],
        'CONTENT': [],
        'COUNT': [],
        'FIRST_MESSAGE': [],
        'MEDIA': [],
        'OTHER': []
    }


    ALL_ITEM_TYPES.forEach(type => {
        console.log(type)
        if (siteStore.posterTheme == null || type.theme_id === siteStore.posterTheme.id)
            groups[type.category].push(type)
    })

    return groups
})

function showAllThemes() {
    siteStore.posterTheme = null
}

const emit = defineEmits<{
    (e: 'confirm', message: string): void
}>()
</script>

<style></style>