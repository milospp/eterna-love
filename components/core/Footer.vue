<template>
    <div id="kontakt" class=" bg-indigo-900 text-white">
        <div
            class="mx-auto max-w-7xl px-6 py-6 pb-10 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 align-middle text-center sm:text-left gap-y-8">
            <div class="pb-10 flex flex-col gap-4 col-span-4">
                <span class="h-8 max-w-40 mx-auto sm:mx-0">
                    <img loading="lazy" class="w-full lg:block" src="/assets/static/EternaLoveLogoWhite.svg" />
                </span>


                <div class="mt-4">
                    <ul class="text-slate-400 space-y-4">
                        <li class="cursor-pointer" href="#">Terms of service</li>
                        <li class="cursor-pointer" href="#">Shipping Policy</li>
                        <li class="cursor-pointer" href="#">Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <div class="pb-10 flex flex-col gap-4 col-span-4">
                <h3 class="h-8">Kontakt</h3>
                <ul class="text-slate-400 mt-4 space-y-4">
                    <li><a href="mailto:office@chatchart.com">office@chatchart.com</a></li>
                    <li><a href="tel:+381631453860">+381631453860</a></li>
                </ul>
            </div>

            <div class="pb-10 flex flex-col gap-4 col-span-4">
                <div>
                    <h3 class="mb-4">Zapratite nas</h3>

                    <CoreSocialsIcons />
                </div>

                <div class="space-y-4">
                    <h3 class="mt-4">Pretplati se za popuste</h3>
                    <div class="flex mx-auto sm:mx-0 justify-center sm:justify-start">
                        <input type="text" placeholder="Unesite email"
                            class="flex-1 p-2 rounded-l-sm rounded-r-none max-w-60 text-black" />
                        <button class="bg-yellow-400 text-black font-light p-2 px-4 rounded-r-sm">Potvrdi</button>
                    </div>
                </div>

            </div>



        </div>
    </div>
</template>

<script lang="ts" setup>

const route = useRoute();

onMounted(() => {
    if (route.hash) {
        nextTick(() => {
            const element = document.querySelector(route.hash);
            if (element) {
                // element.scrollIntoView({ behavior: 'smooth' });
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});


</script>

<style scoped></style>