<template>
    <div class="w-full h-full bg-gray-50 p-[4%]">
        <header class="flex justify-between items-center">
            <div class="relative">
                <!-- <svg class="absolute top-0 bottom-0 left-0 right-0" viewBox="0 0 202 47" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="200" height="45" rx="13" fill="#ff0000" stroke="#B8AAAA" stroke-width="2"
                        stroke-dasharray="17 17" />
                </svg> -->
                <button
                    class="absolute z-20 top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-transparent hover:bg-slate-200 hover:bg-opacity-50 rounded-[11px]">
                    <span class="text-xs text-slate font-thin">Klikne da dodaš ime</span>
                </button>
                <div>
                    <svg class="w-full h-auto relative z-30 pointer-events-none" width="202" height="47"
                        viewBox="0 0 202 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="200" height="45" rx="13" stroke="#B8AAAA" stroke-width="2"
                            stroke-dasharray="17 17" />
                    </svg>
                </div>
            </div>

            <div class="w-[195px] bg-red-50">
            </div>

            <div>
                <img loading="lazy" class="h-auto w-auto" src="/public/EternaLoveLogo.svg" alt="Eterna Love" />
            </div>
        </header>


        <section class="pt-5">
            <div class=" grid grid-cols-3 gap-[2%]">
                <div v-for="i in 12" class="">
                    <div class="w-100 aspect-square bg-blue-500">
                        <img :src="images[i - 1].src" alt="">
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script setup>


const slika = new URL('/public/chart_examples/1.png', import.meta.url).href

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

<style scoped>
.name-outline {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='11' ry='11' stroke='%23333' stroke-width='3' stroke-dasharray='20%2c20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 11px;
}
</style>