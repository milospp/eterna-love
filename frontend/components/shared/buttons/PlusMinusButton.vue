<template>
    <span
        class="bg-indigo-900 rounded-full fill-slate-200 text-slate-200 shadow-lg flex items-center justify-between relative">


        <button @click="decrement()" class="bg-blue-950 hover:bg-indigo-950 rounded-l-full h-full px-5">-</button>
        <div class="relative">
            <input :value="model" @change="changedValue($event)"
                class="p-0 h-full sm:w-28 w-14 sm:pb-4 text-center bg-transparent outline-none text-2xl" type="number">
            <span class="hidden sm:block absolute bottom-1 w-full left-0 right-0 text-center text-xs">
                Broj elemenata
            </span>
        </div>
        <button @click="increment()" class="bg-blue-950 hover:bg-indigo-950 rounded-r-full h-full px-5">+</button>
    </span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    possibleValues: number[];
}>();

// const count = ref(props.modelValue || 12);
const emit = defineEmits(['changed']);
const model = defineModel({
    required: true,
    type: Number,
    default: 0,
});

watch(model, (newValue) => {
    emitChanged(newValue);
});

const increment = () => {
    if (model.value == undefined) model.value = 0;

    if (props.possibleValues) {
        const nextValue = props.possibleValues.find(value => value > model.value);
        if (nextValue !== undefined) {
            model.value = nextValue;

        }
    } else {
        model.value++;
    }

};

const decrement = () => {
    if (model.value == undefined) model.value = 0;

    if (props.possibleValues) {
        const prevValue = [...props.possibleValues].reverse().find(value => value < model.value);
        if (prevValue !== undefined) {
            model.value = prevValue;
        }
    } else {
        model.value--;
    }

};

function changedValue(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value: number = Number(inputElement.value);

    if (value == undefined) return

    if (props.possibleValues) {
        const closestValue = props.possibleValues.reduce((prev, curr) => {
            return (Math.abs(curr - value) <= Math.abs(prev - value) ? curr : prev);
        });

        model.value = closestValue;
    }



}

function emitChanged(newValue: number) {
    emit('changed', newValue);

}

</script>

<style scoped></style>