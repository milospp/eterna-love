<template>
    <button class="group py-2 sm:px-4 px-3 rounded-full flex items-center text-sm"
        :class="[active ? 'bg-blue-300 hover:bg-blue-200' : 'hover:bg-blue-200 hover:bg-opacity-30', enabled ? '' : 'text-slate-500 pointer-events-none']">
        <span class="index w-6 h-6 block rounded-full text-center leading-6"
            :class="[active ? 'bg-blue-900 text-white' : (enabled ? 'bg-white text-black' : 'bg-gray-300 text-gray-500')]">{{
                index
            }}</span>
        <span class="pl-3 hidden sm:block">
            <slot />
        </span>
    </button>
</template>

<script setup>

defineProps({
    index: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    enabled: {
        type: Boolean,
        default: false
    }

});
</script>

<style lang="scss" scoped></style>