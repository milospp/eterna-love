<template>
    <div>
        <h1 class=" text-3xl text-white font-light">Odaberi broj elemenata na posteru</h1>

        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 pt-4">
            <button v-for="i in 6" :key="i">
                <input type="radio" name="layout" :id="'layout_' + i" class="peer hidden" v-model="selectedLayout"
                    :value="i" @change="selectLayout(i)">
                <label :for="'layout_' + i" class="cursor-pointer">
                    <div class="peer-checked:p-5">
                        <SharedWizardCardLayout :active="selectedLayout == i" :value="i" />
                    </div>
                </label>
            </button>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedLayout = ref<number | null>(null);

import { defineEmits } from 'vue';

const emit = defineEmits(['layoutSelected']);
let debounceTimeout: ReturnType<typeof setTimeout>;

function selectLayout(i) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        emit('layoutSelected', i);
    }, 100);
}



</script>

<style></style>