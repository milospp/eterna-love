<template>
    <ul class="accordion">
        <slot></slot>
    </ul>
</template>

<script setup>
import { reactive, provide } from 'vue';

const Accordion = reactive({
    count: 0,
    active: null
});

provide('Accordion', Accordion);

</script>

<style lang="scss" scoped>
.accordion {
    list-style: none;
    margin: 0;
    padding: 0;

    &__item:last-child {
        border-bottom: none;
    }
}
</style>
