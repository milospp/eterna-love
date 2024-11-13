<template>
    <div class="break-words">
        <div class="min-h-screen grid grid-rows-[1fr_auto]">
            <slot />
            <CoreFooter />
        </div>
        <ModalsContainer />
    </div>
</template>

<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal'

</script>

<style></style>