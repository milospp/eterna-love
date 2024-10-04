<template>
    <div>
        <WizardStepperNav :steps="steps" :currentIndex="currentStep.index" @stepChanged="onStepChanged" />
        <div class="bg-[#513CA4]">
            <div class="max-w-5xl mx-auto pt-16 pb-10 px-6">
                <Transition mode="out-in" appear>
                    <component :is="currentStep.component" @layoutSelected="layoutSelected"></component>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';
import WizardStep1Layout from './Step1Layout.vue';
import WizardStep2Design from './Step2Design.vue';
const router = useRouter();


const steps = ref([
    { index: 0, component: WizardStep1Layout, title: 'Broj elemenata' },
    { index: 1, component: WizardStep2Design, title: 'Uređivanje' },
    { index: 2, component: WizardStep2Design, title: 'Pregled' }
]);
const currentStep = ref(steps.value[0]);
const show = ref(false);
const totalSteps = 3;

function nextStep() {
    const currentIndex = currentStep.value.index + 1;
    if (currentIndex <= steps.value.length) {
        currentStep.value = steps.value[currentIndex]; // set to current step
        router.push({ query: { step: currentStepIndex.value } }); // navigate to the next step
    }
}

function prevStep() {
    const currentIndex = currentStep.value.index - 1;
    if (currentIndex > 0) {
        currentStep.value = steps.value[currentIndex]; // set to current step
        router.push({ query: { step: currentStepIndex.value } }); // navigate to the next step
    }
}

function goToStep(stepIndex: number, updatePath = true) {
    const step = steps.value[stepIndex]
    if (step) {
        currentStep.value = step;

        if (updatePath) router.push({ query: { step: currentStepIndex.value } });
    }
}

function layoutSelected(i: number) {
    goToStep(1);
}

function onStepChanged(stepIndex: number) {
    goToStep(stepIndex);
}

const currentStepIndex = computed(() => currentStep.value.index + 1);
// const isLastStep = computed(() => currentStep.value.index === steps.value.length - 1);

function onStepParamChanged(newStep: string) {
    const stepIndex = parseInt(newStep, 10) - 1;
    if (!isNaN(stepIndex) && stepIndex >= 0 && stepIndex < steps.value.length) {
        goToStep(stepIndex, false);
    }
}


onBeforeMount(() => {
    const step = router.currentRoute.value.query.step;
    if (step) {
        onStepParamChanged(step as string);
    }
})


watch(
    () => router.currentRoute.value.query.step,
    (newStep) => {
        newStep = newStep || '1';
        onStepParamChanged(newStep as string);
    }
);




</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>