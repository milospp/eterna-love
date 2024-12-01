<template>
    <li class=" border-b-2 border-slate-300">
        <div class="cursor-pointer flex justify-between px-8 py-4 bg-white text-lg"
            :class="{ 'accordion__trigger_active': visible }" @click="open">

            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <slot name="accordion-trigger"></slot>
            <div class="pl-2">
                <svg :class="visible ? 'rotate-180' : ''" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 transition-all">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>

        <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
            <div class="bg-neutral-50 opacity-1 border-t text-lg border-slate-100" v-show="visible">
                <div class="px-8 pt-16 pb-16 border-b-[1em] border-gray-100 text-gray-600">
                    <ul>
                        <slot name="accordion-content"></slot>
                    </ul>
                </div>
            </div>
        </transition>
    </li>
</template>


<script setup>
import { inject, ref, computed, onMounted } from 'vue';

const Accordion = inject("Accordion");
const index = ref(null);
const visible = computed(() => index.value != undefined && index.value == Accordion.active);


const open = () => {
    if (visible.value) {
        Accordion.active = null;
    } else {
        Accordion.active = index.value;
    }
};

const start = (el) => {
    if (!el.style.height) {
        el.style.height = el.scrollHeight + "px";
    }
};

const end = (el) => {
    el.style.height = "";
};

onMounted(() => {
    index.value = Accordion.count++;
});

</script>

<style lang="scss" scoped>
.accordion-enter-active,
.accordion-leave-active {
    // will-change: height, opacity;
    transition: height .3s ease, opacity .3s ease, transform .3s ease-in-out;
    overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
    opacity: 0;
    height: 0 !important;
}
</style>
