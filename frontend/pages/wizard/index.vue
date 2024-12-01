<template>
    <div class="flex flex-col">
        <CoreNavbar class="red" />
        <WizardStepperMain class="flex-1" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();


</script>

<style scoped></style>