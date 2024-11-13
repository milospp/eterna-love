<template>
    <div class="space-y-8">
        <h2 class="text-xl font-semibold text-gray-900">Adresa za dostavu</h2>

        <div>
            <div class="flex items-center ps-4 border border-gray-200 first:rounded-t last:rounded-b">
                <input v-model="shipAddress" id="same-address" type="radio" value="SAME" name="ship-address"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ">
                <label for="same-address" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 ">Ista kao adresa
                    kupca</label>
            </div>
            <div class="flex items-center ps-4 border border-gray-200 first:rounded-t last:rounded-b">
                <input v-model="shipAddress" id="new-address" type="radio" value="NEW" name="ship-address"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                <label for="new-address" class="w-full py-4 ms-2 text-sm font-medium text-gray-900">Druga adresa za
                    dostavu</label>
            </div>
        </div>


        <Transition name="fade">
            <WizardCheckoutContactForm v-if="shipAddress == 'NEW'" />
        </Transition>


        <div>
            <SharedButtonsAction @click="saveContect" class="mt-12 px-14 py-4 mx-auto">
                Sačuvaj
            </SharedButtonsAction>
        </div>

    </div>


</template>

<script lang="ts" setup>

const emit = defineEmits(['saved']);
const shipAddress = ref('SAME');

function saveContect() {
    console.log('Check data');
    emit('saved');
}

</script>

<style></style>