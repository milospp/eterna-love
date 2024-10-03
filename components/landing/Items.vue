<template>
    <div class="bg-[#F5F5F5]">
        <div class="mx-auto max-w-7xl px-6 pb-10">
            <h1 class="pt-20 pb-14 text-3xl">Proizvodi</h1>
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 pt-4">
                <div v-for="i in 6" :key="i"
                    class="shadow-md hover:mt-[-4px] hover:shadow-lg col-span-1 bg-white rounded-sm border-gray-300 border-1 lg:p-6 sm:p-5 p-2">
                    <img class="mb-2" src="/public/EternaExample1.png" alt="" />
                    <p class="">12 Elemenata</p>
                    <p class="text-slate-600 font-thin text-sm">
                        od <span class="font-normal">599 RSD</span>
                    </p>
                </div>
            </div>
            <div class="w-100">
                <button class="block mx-auto bg-gray-800 text-white font-bold py-4 px-6 rounded-full mt-10">
                    Pogledaj sve
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
