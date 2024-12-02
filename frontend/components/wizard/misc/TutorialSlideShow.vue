<template>
    <!-- <div class="w-4/5 md:w-2/3 snap-mandatory snap-x overflow-x-auto mx-auto">
        <div class="flex gap-2">
            <div class="w-[20vw] h-1 flex-none"></div>
            <div v-for="i in 10" class="flex-none max-h-[80vh] max-w-full m-0">
                <img class="image object-contain h-full snap-center" src="/public/tutorial/example1.png" />
            </div>
            <div class="w-[20vw] h-1 bg-red-400 flex-none"></div>

        </div>

    </div> -->

    <!-- {{ tutorialSlides }} -->

    <div class=" select-none">
        <swiper :slides-per-view="'auto'" :centeredSlidesBounds="true" :centered-slides="true" :space-between="10"
            :navigation="true" :free-mode="{ sticky: true }"
            :mousewheel="{ forceToAxis: true, releaseOnEdges: false, sensitivity: 1 }" :modules="modules"
            :keyboard="true" :pagination="{ type: 'progressbar' }" @swiper="setSwiperRef" @reach-end="onReachEnd"
            @active-index-change="" @snap-index-change="changed">

            <swiper-slide v-for="slide in tutorialSlides" class="w-32">
                <img :src="slide.image" class="h-full object-contain" />
            </swiper-slide>

        </swiper>

    </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Controller, Mousewheel, Pagination, FreeMode, Navigation, Keyboard } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Controller, Pagination, Mousewheel, FreeMode, Navigation, Keyboard];
const swiperRef = ref<any>(null);
const bugfixSwipedToFirst = ref(false);

const props = defineProps<{
    social: SocialNetworkType
}>();




const emit = defineEmits<{
    (e: 'changed', title: string): void
}>();


const tutorialSlides: ComputedRef<TutorialStep[]> = computed(() => {
    let defaultSlides = TUTORIAL_SLIDES[props.social]['default']
    if (TUTORIAL_SLIDES[props.social].phone_sr != undefined)
        return TUTORIAL_SLIDES[props.social].phone_sr || defaultSlides

    return TUTORIAL_SLIDES[props.social]['default']
})

const titles: string[] = [
    '1. Otvori instagram i idi na profil',
    '1. Otvori instagram i idi na profil',
    '2. Klikni na tri tačke u gornjem desnom uglu',
    '3. Izaberi opciju "Kopiraj link"',
    '4. Otvori aplikaciju i klikni na dugme "Započni analizu"',
    '5. Analiza je završena, klikni na "Pogledaj analizu"',
    '6. Pogledaj analizu i klikni na "Napravi poster"',
    '7. Podeli poster sa prijateljima',
]

function setSwiperRef(swiper: any) {
    swiperRef.value = swiper;

    setTimeout(() => {
        onReachEnd()
    }, 100);
};

function onReachEnd() {
    nextTick(() => {
        if (swiperRef.value && !bugfixSwipedToFirst.value) {
            swiperRef.value.slideTo(1);
            bugfixSwipedToFirst.value = true;
        }
    });
}

function changed(slide: any) {
    // console.log(slide);

    // emit('changed', titles[slide.activeIndex || 0]);
    let text = tutorialSlides.value[slide.snapIndex || 0]?.title || '';

    emit('changed', text);
}

</script>

<style>
.swiper-slide {
    width: auto;
    max-width: 100%;
    max-height: 80vh;
    height: 700px;
}
</style>