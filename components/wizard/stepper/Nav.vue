<template>
    <div class="bg-[#271B6D]">
        <header class="max-w-7xl mx-auto">
            <div class="flex gap-2 sm:gap-5 items-center justify-center text-white stepper-nav p-3">
                <template v-for="step, index in steps" :key="step.index">
                    <template v-if="!step.hidden || step.index <= currentIndex">
                        <svg v-if="step.index > 0" width="8" height="14" viewBox="0 0 8 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.646405 0.646161C0.692851 0.599598 0.748026 0.562655 0.808772 0.537449C0.869517 0.512242 0.934638 0.499268 1.00041 0.499268C1.06617 0.499268 1.13129 0.512242 1.19204 0.537449C1.25278 0.562655 1.30796 0.599598 1.35441 0.646161L7.35441 6.64616C7.40097 6.69261 7.43791 6.74778 7.46312 6.80853C7.48832 6.86927 7.5013 6.93439 7.5013 7.00016C7.5013 7.06593 7.48832 7.13105 7.46312 7.19179C7.43791 7.25254 7.40097 7.30772 7.35441 7.35416L1.35441 13.3542C1.26052 13.448 1.13318 13.5008 1.00041 13.5008C0.86763 13.5008 0.740292 13.448 0.646405 13.3542C0.552519 13.2603 0.499774 13.1329 0.499774 13.0002C0.499774 12.8674 0.552519 12.74 0.646405 12.6462L6.29341 7.00016L0.646405 1.35416C0.599842 1.30772 0.562899 1.25254 0.537693 1.1918C0.512486 1.13105 0.499512 1.06593 0.499512 1.00016C0.499512 0.934394 0.512486 0.869273 0.537693 0.808528C0.562899 0.747783 0.599842 0.692607 0.646405 0.646161Z"
                                fill="white" />
                        </svg>
                        <SharedWizardStepsButtons @click="navClicked(step)" :active="currentIndex == step.index"
                            :enabled="step.enabled" :index="step.index + 1">
                            {{ step.title }}
                        </SharedWizardStepsButtons>
                    </template>
                </template>
            </div>
        </header>
    </div>
</template>

<script lang="ts" setup>

const emit = defineEmits(['stepChanged']);

defineProps({
    steps: {
        type: Array<any>,
        required: true

    },

    currentIndex: {
        type: Number,
        required: true
    }
});

function navClicked(step: any) {
    emit('stepChanged', step.index);
}

</script>