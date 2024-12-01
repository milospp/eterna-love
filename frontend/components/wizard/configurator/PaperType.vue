<template>
    <div class="pt-4" v-if="isPosterFormatPaper">
        <h3 class="mb-5 text-lg font-medium text-white ">Odaberi tip papira</h3>
        <div>
            <ul class="w-full max-w-96 gap-4 grid grid-cols-2">
                <li v-for="paperType in PAPER_TYPE">
                    <input v-model="siteStore.posterConfig.paperType" type="radio" :id="'paper-type-' + paperType.id"
                        name="paper-type" :value="paperType" class="hidden peer" required />
                    <label :for="'paper-type-' + paperType.id"
                        class="inline-flex items-center justify-between w-full p-4 text-gray-500 bg-white outline-4 outline outline-gray-200 rounded-lg cursor-pointer relative z-0 peer-checked:z-10 peer-checked:outline-yellow-400 peer-checked:text-yellow-900 hover:text-yellow-900 hover:bg-gray-100 peer-checked:bg-yellow-100">
                        <div class="block">
                            <div class="w-full">
                                <span class="text-lg font-semibold">{{ paperType.name }}</span> -
                                <small class="">{{ paperType.description }}</small>
                            </div>
                            <div class="w-full text-sm">+{{ paperType.price }} <small>RSD</small></div>
                        </div>

                        <div>
                            <div v-if="paperType.icon == 'matt'">
                                <!-- <div class="w-[1.7rem] h-10 border border-gray-900 mr-1"></div> -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor"
                                        d="M13.5 1.5v7h7m-16-7v21h16V8l-.282-.126a12 12 0 0 1-6.092-6.092L14 1.5z" />
                                </svg>
                            </div>

                            <div v-if="paperType.icon == 'glossy'">
                                <img class="size-8" src="/public/images/glass_icon.png" alt="">
                            </div>

                        </div>
                    </label>
                </li>

            </ul>

        </div>

    </div>
</template>

<script lang="ts" setup>
const siteStore = useSiteStore()

const isPosterFormatPaper = computed(() => siteStore.posterConfig.format?.id ? ['A5', 'A4', 'A3'].includes(siteStore.posterConfig.format.id) : false)
</script>

<style></style>