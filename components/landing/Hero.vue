<template>
    <div class="mx-auto gap-5 max-w-7xl sm:flex pt-20 pb-10 break-words">
        <div class="sm:w-1/2 md:w-1/2">
            <div class="flex flex-col justify-center h-full">
                <h1
                    class=" text-5xl md:text-6xl font-bold mt-10 mb-10 px-6 sm:px-16 text-center sm:text-left hyphens-auto">
                    Vizualizujte vaš chat</h1>
                <NuxtLink to="/wizard">
                    <SharedCtaButton class="hidden sm:flex"></SharedCtaButton>
                </NuxtLink>
            </div>
        </div>
        <div class="md:w-1/2 sm:w-1/2">
            <div class="flex items-end justify-center relative h-full">
                <div class="relative border-8 w-1/2 border-gray-700 z-20 shadow-lg">
                    <div class="poster-shadow"></div>
                    <img class="relative z-10" src="public/EternaExample1.png" alt="">
                </div>
                <div class="relative border-8 w-2/5 border-gray-700 ml-[-10%] mb-1 z-10 shadow-sm">
                    <div class="poster-shadow"></div>
                    <img class="relative z-20" src="public/EternaExample1.png" alt="">
                </div>
            </div>
            <NuxtLink to="/wizard">
                <SharedCtaButton class="sm:hidden"></SharedCtaButton>
            </NuxtLink>

        </div>
    </div>

    <svg data-v-6da3ec0c="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 70"
        preserveAspectRatio="none" class="" style="width: 100%; height: 80px;">
        <path data-v-6da3ec0c="" d="
          M900.66,70          C906.67,72,823.78,31,743.84,14.19
          c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35
          V70
          H900
          Z" class="shape-fill" style="fill: #F5F5F5;"></path>
    </svg>
</template>

<script lang="ts" setup>

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