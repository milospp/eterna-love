<template>
    <div>
        <h1 class=" text-3xl text-white font-light">Uredi svoj poster</h1>

        <div>
            <div class=" bg-red-300 w-60 aspect-paper"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedLayout = ref<number | null>(null);
</script>

<style></style>