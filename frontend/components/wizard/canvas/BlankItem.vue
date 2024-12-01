<template>
    <div itemtype="placeholder" class="relative">
        <div class="hover:scale-105 transition-all">
            <div
                class="w-100 aspect-square border-2 border-dashed rounded-md border-gray-300 transition-all hover:bg-gray-200">
                <div class="flex flex-col items-center justify-center h-full">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 0.5C12.3812 0.5 12.7469 0.651451 13.0165 0.921034C13.2861 1.19062 13.4375 1.55625 13.4375 1.9375V10.5625H22.0625C22.4437 10.5625 22.8094 10.714 23.079 10.9835C23.3486 11.2531 23.5 11.6188 23.5 12C23.5 12.3812 23.3486 12.7469 23.079 13.0165C22.8094 13.2861 22.4437 13.4375 22.0625 13.4375H13.4375V22.0625C13.4375 22.4437 13.2861 22.8094 13.0165 23.079C12.7469 23.3486 12.3812 23.5 12 23.5C11.6188 23.5 11.2531 23.3486 10.9835 23.079C10.714 22.8094 10.5625 22.4437 10.5625 22.0625V13.4375H1.9375C1.55625 13.4375 1.19062 13.2861 0.921034 13.0165C0.651451 12.7469 0.5 12.3812 0.5 12C0.5 11.6188 0.651451 11.2531 0.921034 10.9835C1.19062 10.714 1.55625 10.5625 1.9375 10.5625H10.5625V1.9375C10.5625 1.55625 10.714 1.19062 10.9835 0.921034C11.2531 0.651451 11.6188 0.5 12 0.5Z"
                            fill="#DCDCDC" />
                    </svg>
                    <span class="text-[0.5em] sm:text-xs font-thin pt-2 text-slate-400 text-center">
                        Klikni da odabereš dizajn <slot></slot>
                    </span>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>