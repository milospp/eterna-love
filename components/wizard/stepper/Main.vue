<template>
    <div class="bg-[#513CA4]">
        <WizardStepperNav :steps="steps" :currentIndex="currentStep.index" @stepChanged="onStepChanged" />
        <div class="">
            <div id="stepperComponent" class="max-w-5xl mx-auto pt-16 pb-10 px-6">
                <Transition mode="out-in" appear>
                    <component :is="currentStep.component" @layoutSelected="layoutSelected"
                        @itemsConfirmed="onItemsConfirmed" @submitedResults="submitedResults"
                        @submitedOptions="submitedOptions"></component>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, markRaw } from 'vue';
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';
import WizardStep1Layout from './Step1Layout.vue';
import WizardStep2Design from './Step2Design.vue';
import WizardStep3Upload from './Step3Upload.vue';
import WizardStep4Options from './Step4Options.vue';
import WizardStep5Review from './Step5Review.vue';
const router = useRouter();
const siteStore = useSiteStore();

const enabledStep2 = computed(() => siteStore.posterEdit.layout != null);
const enabledStep3 = computed(() => !siteStore.hasEmptyItems);
const enabledStep4 = computed(() => siteStore.hasAnyResult);
const enabledStep5 = computed(() => siteStore.hasAnyResult);

const steps = ref([
    { index: 0, component: markRaw(WizardStep1Layout), title: 'Dimenzija', enabled: true },
    { index: 1, component: markRaw(WizardStep2Design), title: 'Izgled', enabled: enabledStep2 },
    { index: 2, component: markRaw(WizardStep3Upload), title: 'Poruke', enabled: enabledStep3 },
    { index: 3, component: markRaw(WizardStep4Options), title: 'Opcije', enabled: enabledStep4 },
    { index: 4, component: markRaw(WizardStep5Review), title: 'Pregled', enabled: true }
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
        updateHidden();
        if (updatePath) router.push({ query: { step: currentStepIndex.value } });
    }
}

function updateHidden() {
    steps.value.forEach((step, index) => {
        if (step.index <= currentStep.value.index) {
            step.hidden = false
        }
    });
}

function scrollToSection() {
    const stepperComponent = document.getElementById('stepperComponent');
    if (stepperComponent) {
        stepperComponent.scrollIntoView({ behavior: 'smooth' });
    }
}

function layoutSelected(layout: CardLayoutType) {
    goToStep(1);
    scrollToSection();

}

function onItemsConfirmed(layout: CardLayoutType) {
    goToStep(2);
    scrollToSection();
}

function submitedResults(layout: CardLayoutType) {
    goToStep(3);
    scrollToSection();
}

function submitedOptions(layout: CardLayoutType) {
    goToStep(4);
    scrollToSection();
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