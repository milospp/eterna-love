<template>
    <div id="products" class="bg-[#F5F5F5]">
        <div class="mx-auto max-w-7xl px-6 pb-10 cursor-pointer">
            <h1 class=" pt-20 pb-14 text-3xl">Proizvodi</h1>
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 pt-4">

                <div @click="loadPredefinedTemplate(item)" v-for="item, index in PREDEFINED_TEMPLATES" :key="item.id"
                    class="shadow-md hover:mt-[-4px] hover:shadow-lg col-span-1 bg-white rounded-sm border-gray-300 border-1 lg:p-3 sm:p-2 p-1 lg:block"
                    :class="{ 'lg:hidden': !showAll && index >= 4, 'md:hidden': !showAll && index >= 3, 'hidden': !showAll && index >= 4 }">
                    <img class="mb-2 aspect-paper w-full" :src="item.image" alt="" />
                    <div class="lg:px-4 sm:px-2 px-2">

                        <p class="">{{ item.name }}</p>
                        <p class="text-slate-600 font-thin text-sm">
                            od <span class="font-normal">{{ item.layout.initPrice }} RSD</span>
                        </p>
                    </div>
                </div>

            </div>
            <div class="w-100">
                <button v-if="!showAll" @click="expandList"
                    class="block mx-auto bg-gray-800 text-white font-bold py-4 px-6 rounded-full mt-10">
                    Pogledaj sve
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { PredefinedTemplate } from '~/utils/constants';


const siteStore = useSiteStore()

const showAll = ref(false)

function expandList() {
    showAll.value = true
}

function loadPredefinedTemplate(template: PredefinedTemplate) {
    siteStore.posterEdit.layout = template.layout
    siteStore.posterEdit.posterItems = template.items
    siteStore.posterTheme = template.theme || null
    const router = useRouter();
    router.push({ path: '/wizard', query: { step: 2 } });
}
</script>

<style scoped></style>
