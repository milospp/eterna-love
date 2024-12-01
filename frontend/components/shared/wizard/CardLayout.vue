<template>
    <div class="group shadow-md outline outline-blue-400 hover:shadow-lg col-span-1 bg-white rounded-md lg:p-4 sm:p-3 p-2"
        :class="[active ? 'outline-8 ' : 'outline-2 hover:outline-4']">
        <div class="border border-slate-300 bg-gray-50">
            <component :is="placeholderComponent" />
        </div>
        <div class="flex justify-between items-center mt-3">
            <p class=" font-semibold text-gray-600 text-sm">{{ productTitle }}</p>
            <p class="text-slate-600 font-thin text-sm">
                <span class="font-normal">{{ layout.initPrice }} <span class=" text-xs">RSD</span></span>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import Element1 from '~/components/shared/wizard/placeholders/Element1.vue'
import Element2 from '~/components/shared/wizard/placeholders/Element2.vue'
import Element4 from '~/components/shared/wizard/placeholders/Element4.vue'
import Element6 from '~/components/shared/wizard/placeholders/Element6.vue'
import Element9 from '~/components/shared/wizard/placeholders/Element9.vue'
import Element12 from '~/components/shared/wizard/placeholders/Element12.vue'

const placeholderComponent = computed(() => {
    if (props.layout.elementCount == 2) return Element2
    if (props.layout.elementCount == 4) return Element4
    if (props.layout.elementCount == 6) return Element6
    if (props.layout.elementCount == 9) return Element9
    if (props.layout.elementCount == 12) return Element12
    return Element1
})

const productTitle = computed(() => {
    const count = props.layout.elementCount;
    let elementWord = 'Elemenata';
    if (count === 1) {
        elementWord = 'Element';
    } else if (count > 1 && count < 5) {
        elementWord = 'Elementa';
    }
    return `${count} ${elementWord}`;
});

const props = defineProps<{
    active: boolean;
    text?: string;
    price?: string;
    img_link?: string;
    layout: CardLayoutType
}>();
</script>

<style></style>