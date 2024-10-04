<template>
    <div>
        <h1 class=" text-3xl text-white font-light mb-5">Uredi svoj poster</h1>

        <div class="flex items-stretch">
            <div class=" border-indigo-950 border-8 aspect-paper sm:w-8/12 w-full">

                <WizardCanvasMainPaper />
            </div>
            <div class="hidden sm:w-4/12 sm:flex aspect-paper">
                <span class="p-4 m-auto">
                    <svg width="41" height="138" viewBox="0 0 41 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M40.1398 1.55915C39.8679 1.06492 39.5448 0.672806 39.1891 0.405262C38.8334 0.137717 38.4521 0 38.0669 0C37.6818 0 37.3005 0.137717 36.9448 0.405262C36.5891 0.672806 36.266 1.06492 35.994 1.55915L0.860157 65.244C0.587498 65.737 0.371174 66.3226 0.223576 66.9674C0.0759735 67.6121 0 68.3033 0 69.0014C0 69.6995 0.0759735 70.3907 0.223576 71.0354C0.371174 71.6802 0.587498 72.2658 0.860157 72.7588L35.994 136.444C36.5438 137.44 37.2895 138 38.0669 138C38.8444 138 39.5901 137.44 40.1398 136.444C40.6896 135.447 40.9985 134.096 40.9985 132.686C40.9985 131.277 40.6896 129.925 40.1398 128.929L7.073 69.0014L40.1398 9.07396C40.4125 8.58098 40.6288 7.99534 40.7764 7.35058C40.924 6.70583 41 6.01462 41 5.31656C41 4.61849 40.924 3.92729 40.7764 3.28253C40.6288 2.63777 40.4125 2.05213 40.1398 1.55915Z"
                            fill="white" />
                    </svg>
                </span>
                <div class="w-full gap-5 flex flex-col overflow-y-auto bg-blue-950 p-3">
                    <div v-for="i in 8">
                        <img :src="images[i - 1].src" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const selectedLayout = ref<number | null>(null);

const images = ref([
    { src: new URL(`/public/chart_examples/1.png`, import.meta.url).href, alt: '1' },
    { src: new URL('/public/chart_examples/2.png', import.meta.url).href, alt: '2' },
    { src: new URL('/public/chart_examples/3.png', import.meta.url).href, alt: '3' },
    { src: new URL('/public/chart_examples/4.png', import.meta.url).href, alt: '4' },
    { src: new URL('/public/chart_examples/5.png', import.meta.url).href, alt: '5' },
    { src: new URL('/public/chart_examples/6.png', import.meta.url).href, alt: '6' },
    { src: new URL('/public/chart_examples/7.png', import.meta.url).href, alt: '7' },
    { src: new URL('/public/chart_examples/8.png', import.meta.url).href, alt: '8' },
    { src: new URL('/public/chart_examples/1.png', import.meta.url).href, alt: '9' },
    { src: new URL('/public/chart_examples/2.png', import.meta.url).href, alt: '10' },
    { src: new URL('/public/chart_examples/3.png', import.meta.url).href, alt: '11' },
    { src: new URL('/public/chart_examples/4.png', import.meta.url).href, alt: '12' },
])

</script>

<style></style>