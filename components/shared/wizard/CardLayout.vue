<template>
    <div class="shadow-md outline outline-blue-400 hover:shadow-lg col-span-1 bg-white rounded-md lg:p-4 sm:p-3 p-2"
        :class="[active ? 'outline-8 ' : 'outline-2 hover:outline-4']">
        <img draggable="false" class="mb-2 border border-gray-200" src="/public/EternaExample1.png" alt="" />
        <div class="flex justify-between items-center">
            <p class="">12 Elemenata</p>
            <p class="text-slate-600 font-thin text-sm">
                od <span class="font-normal">599 RSD</span>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    active: boolean;
    text?: string;
    price?: string;
    img_link?: string;
}>();
</script>

<style></style>