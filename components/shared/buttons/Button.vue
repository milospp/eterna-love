<template>
    <button :class="small ? 'text-xs' : ''"
        class="bg-blue-950 hover:bg-indigo-950 rounded-full fill-slate-200 text-slate-200 shadow-lg flex items-center justify-between gap-5">
        <slot></slot>

    </button>
</template>

<script lang="ts" setup>
defineProps<{
    small?: boolean
}>();
</script>

<style scoped></style>