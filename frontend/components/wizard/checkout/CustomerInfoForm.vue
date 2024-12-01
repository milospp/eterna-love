<template>
    <div class="space-y-8">
        <h2 class="text-xl font-semibold text-gray-900">Moji Podaci</h2>
        <WizardCheckoutContactForm purpose="CONTACT" />

        <div>
            <SharedButtonsAction @click="saveContect" class="mt-12 px-14 py-4 mx-auto">
                Sačuvaj
            </SharedButtonsAction>
        </div>

    </div>


</template>

<script lang="ts" setup>


const emit = defineEmits(['saved']);

function saveContect() {
    console.log('Check data');
    emit('saved');
}

</script>

<style></style>