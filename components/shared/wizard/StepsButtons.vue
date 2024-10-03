<template>
    <button class="group py-2 px-4 rounded-full flex items-center text-sm hover:bg-blue-200"
        :class="[active ? 'bg-blue-300' : '']">
        <span
            class="index w-6 h-6 block rounded-full text-center leading-6 group-hover:bg-blue-800 group-hover:text-gray-100"
            :class="[active ? 'bg-blue-900 text-white' : 'bg-white text-black']">{{
                index
            }}</span>
        <span class="pl-3 hidden sm:block"><slot /></span>
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
    }
});
</script>

<style lang="scss" scoped></style>