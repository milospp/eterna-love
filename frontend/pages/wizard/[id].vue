<template>
    <CoreNavbar class="red" />
    <WizardStepperStepper />
    <h1>{{ currentStep }}</h1>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentStep = computed(() => {
    // Get the current step from the route parameter (id)
    return parseInt(route.params.id as string) || 1;
});
</script>

<style scoped></style>