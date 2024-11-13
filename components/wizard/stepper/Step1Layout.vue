<template>
    <div>
        <svg display="none" class="w-0 h-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="grad6" cx="78.34%" cy="7.75%" r="61.76%">
                    <stop offset="27.79%" stop-color="rgba(255, 233, 32, 0.39)" />
                    <stop offset="100%" stop-color="rgba(255, 255, 255, 0)" />
                </radialGradient>

                <!-- Radial Gradient 2 -->
                <radialGradient id="grad5" cx="-6.68%" cy="10.43%" r="72.73%">
                    <stop offset="19.95%" stop-color="#5772FF" />
                    <stop offset="85.5%" stop-color="rgba(255, 255, 255, 0)" />
                </radialGradient>

                <!-- Radial Gradient 3 -->
                <radialGradient id="grad4" cx="-6.68%" cy="10.43%" r="94.65%">
                    <stop offset="19.95%" stop-color="#FF5CB4" />
                    <stop offset="100%" stop-color="rgba(255, 255, 255, 0)" />
                </radialGradient>

                <!-- Radial Gradient 4 -->
                <radialGradient id="grad3" cx="24.33%" cy="87.97%" r="64.44%">
                    <stop offset="26.5%" stop-color="#1F94FF" />
                    <stop offset="100%" stop-color="rgba(255, 255, 255, 0)" />
                </radialGradient>

                <!-- Radial Gradient 5 -->
                <radialGradient id="grad2" cx="105.08%" cy="0%" r="159.89%">
                    <stop offset="15.22%" stop-color="#FED4FF" />
                    <stop offset="100%" stop-color="rgba(255, 255, 255, 0)" />
                </radialGradient>

                <!-- Linear Gradient -->
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0" gradientTransform="rotate(136.47)">
                    <stop offset="12.17%" stop-color="#9778F2" />
                    <stop offset="95.83%" stop-color="#3E2F9A" />
                </linearGradient>
            </defs>

        </svg>

        <h1 class=" text-3xl text-white font-light">Odaberi broj elemenata na posteru</h1>

        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 pt-4">
            <button v-for="layout in AVAILABLE_LAYOUT_TYPES" :key="layout.id">
                <input type="radio" name="layout" :id="'layout_' + layout.id" class="peer hidden"
                    :checked="selectedLayout?.id == layout.id" :value="layout.id" @click="selectLayout(layout)">
                <label :for="'layout_' + layout.id" class="cursor-pointer">
                    <div class="peer-checked:p-5">
                        <SharedWizardCardLayout :active="selectedLayout?.id == layout.id" :value="layout.id"
                            :layout="layout" />
                    </div>
                </label>
            </button>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';
const emit = defineEmits(['layoutSelected']);
const siteStore = useSiteStore();

let debounceTimeout: ReturnType<typeof setTimeout>;

const selectedLayout = computed(() => {
    return siteStore.posterEdit.layout
})

function selectLayout(layout: CardLayoutType) {

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        siteStore.posterEdit.layout = layout;
        nextTick(() => {
            emit('layoutSelected', layout);
        });
    }, 100);
}



</script>

<style></style>