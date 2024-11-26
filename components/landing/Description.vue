<template>
    <div class="bg-[#F5F5F5] py-32">
        <div class="mx-auto max-w-7xl px-6 pb-10 text-center">
            <h2 class="font-bold text-gray-800 text-3xl mb-8">Odaberi chat sa dragom osobom i saznaj satistiku</h2>

            <div class="grid grid-cols-4 gap-y-8">
                <div v-for="i in 8" class="space-y-2 text-xl mx-auto">
                    <img class="block size-48" src="/public/poster/theme-items/pastel-lavanda/total-bar.png" alt="">
                    <p class="mt-20">Broj poslatih poruka</p>
                </div>

            </div>

            <p>Koliko ste glasovnih poruka poslušali</p>
            <p>Omiljeni emoji</p>
            <p>Najčešća reč</p>
        </div>

    </div>
</template>

<script lang="ts" setup>

</script>

<style></style>