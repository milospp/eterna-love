<template>
    <SharedModalsBaseModal>
        <div v-for="(items, groupId) in groupedItems">
            <p class=" text-slate-500 text-xl font-thin mb-4">{{ groupId }}</p>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pb-8">
                <WizardCanvasItem @click="emit('confirm', item)" v-for="item in items" :type="item.type_id"
                    location="MODAL_GALERY" :col-span="item.width"
                    :class="{ 'col-span-2': item.width == 2, 'col-span-3': item.width == 3, 'hidden': item.width === 0 }" />
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