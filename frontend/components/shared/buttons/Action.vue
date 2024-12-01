<template>
    <button
        :class="['bg-yellow-300 hover:bg-yellow-400 rounded-full text-black shadow-lg flex items-center justify-between gap-5', { 'opacity-50 cursor-not-allowed': props.disabled }]">
        <slot></slot>

    </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    disabled?: boolean;
}>();
</script>

<style></style>