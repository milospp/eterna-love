<template>
    <div>
        <CoreNavbar class="red" />
        <WizardStepper />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();


</script>

<style scoped></style>