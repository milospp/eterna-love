<template>
    <div class="mx-auto gap-5 max-w-7xl sm:flex pt-20 pb-10">
        <div class="sm:w-1/2 md:w-1/2">
            <div class="flex flex-col justify-center h-full">
                <div class="px-6 sm:px-16  mt-10 mb-10">
                    <h1 class=" text-5xl md:text-6xl font-bold text-center sm:text-left hyphens-auto">
                        {{ heroTitle }}
                    </h1>

                </div>
                <NuxtLink to="/wizard">
                    <SharedCtaButton class="hidden sm:flex"></SharedCtaButton>
                </NuxtLink>
            </div>
        </div>
        <div class="md:w-1/2 sm:w-1/2">
            <div class="flex justify-center relative h-full items-center">
                <div class="relative border-8 w-1/2 border-gray-700 z-20 shadow-lg">
                    <div class="poster-shadow"></div>
                    <img class="relative z-10" src="/public/images/eterna-love-example-pastel-1.png" alt="">
                </div>
                <div class="relative border-8 w-2/5 border-gray-700 ml-[-10%] mb-1 z-10 shadow-sm">
                    <div class="poster-shadow"></div>
                    <img class="relative z-20" src="/public/images/eterna-love-example-cute-1.jpg" alt="">
                </div>
            </div>

            <NuxtLink to="/wizard">
                <SharedCtaButton class="sm:hidden"></SharedCtaButton>
            </NuxtLink>

        </div>
    </div>


    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 70" preserveAspectRatio="none" class=""
        style="width: 100%; height: 80px;">
        <path d="
        M900.66,70          C906.67,72,823.78,31,743.84,14.19
        c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35
        V70
        H900
        Z" class="shape-fill" style="fill: #F5F5F5;"></path>

    </svg>

    <!-- Bugfix phantom spill line -->
    <div class="bg-red-200s" style="height: 0px;">
        <svg width="100%" height="2px" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="2px" fill="#F5F5F5" />
        </svg>
    </div>
</template>

<script lang="ts" setup>

const heroTitle = ref('Vizualizujte vaš chat');


onBeforeMount(() => {
    const randomIndex = Math.floor(Math.random() * HERO_TITLES.length);
    heroTitle.value = HERO_TITLES[randomIndex]
});
</script>

<style scoped>
.poster-shadow {
    content: '';
    position: absolute;
    left: -10px;
    right: -10px;
    bottom: -20px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    height: 29px;
    border-radius: 100%;
    filter: blur(10px);
}
</style>