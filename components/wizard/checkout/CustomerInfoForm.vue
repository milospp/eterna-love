<template>
    <div class="space-y-8">
        <h2 class="text-xl font-semibold text-gray-900">Moji Podaci</h2>
        <ContactForm />

        <div>
            <SharedButtonsAction @click="saveContect" class="mt-12 px-14 py-4 mx-auto">
                Sačuvaj
            </SharedButtonsAction>
        </div>

    </div>


</template>

<script lang="ts" setup>
import ContactForm from './ContactForm.vue';


const emit = defineEmits(['saved']);

function saveContect() {
    console.log('Check data');
    emit('saved');
}

</script>

<style></style>