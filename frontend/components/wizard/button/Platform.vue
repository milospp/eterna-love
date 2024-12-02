<template>
    <button :class="classStyle" class="rounded-2xl h-auto w-16 p-2 relative">
        <!-- <svg  viewBox="0 0 55 56" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.3587 0.929199H39.1087C47.7754 0.929199 54.8171 7.97087 54.8171 16.6375V39.3875C54.8171 43.5536 53.1621 47.5491 50.2162 50.495C47.2703 53.4409 43.2748 55.0959 39.1087 55.0959H16.3587C7.69206 55.0959 0.650391 48.0542 0.650391 39.3875V16.6375C0.650391 12.4714 2.30537 8.47595 5.25126 5.53006C8.19714 2.58418 12.1926 0.929199 16.3587 0.929199ZM15.8171 6.34587C13.2312 6.34587 10.7512 7.3731 8.92277 9.20158C7.09429 11.0301 6.06706 13.51 6.06706 16.0959V39.9292C6.06706 45.3188 10.4275 49.6792 15.8171 49.6792H39.6504C42.2363 49.6792 44.7162 48.652 46.5447 46.8235C48.3732 44.995 49.4004 42.5151 49.4004 39.9292V16.0959C49.4004 10.7063 45.04 6.34587 39.6504 6.34587H15.8171ZM41.9525 10.4084C42.8503 10.4084 43.7114 10.765 44.3463 11.3999C44.9812 12.0348 45.3379 12.8959 45.3379 13.7938C45.3379 14.6917 44.9812 15.5527 44.3463 16.1876C43.7114 16.8225 42.8503 17.1792 41.9525 17.1792C41.0546 17.1792 40.1935 16.8225 39.5586 16.1876C38.9237 15.5527 38.5671 14.6917 38.5671 13.7938C38.5671 12.8959 38.9237 12.0348 39.5586 11.3999C40.1935 10.765 41.0546 10.4084 41.9525 10.4084ZM27.7337 14.4709C31.3252 14.4709 34.7696 15.8976 37.3091 18.4371C39.8487 20.9767 41.2754 24.4211 41.2754 28.0125C41.2754 31.604 39.8487 35.0484 37.3091 37.5879C34.7696 40.1275 31.3252 41.5542 27.7337 41.5542C24.1423 41.5542 20.6979 40.1275 18.1583 37.5879C15.6188 35.0484 14.1921 31.604 14.1921 28.0125C14.1921 24.4211 15.6188 20.9767 18.1583 18.4371C20.6979 15.8976 24.1423 14.4709 27.7337 14.4709ZM27.7337 19.8875C25.5788 19.8875 23.5122 20.7436 21.9885 22.2673C20.4647 23.791 19.6087 25.8577 19.6087 28.0125C19.6087 30.1674 20.4647 32.234 21.9885 33.7578C23.5122 35.2815 25.5788 36.1375 27.7337 36.1375C29.8886 36.1375 31.9552 35.2815 33.479 33.7578C35.0027 32.234 35.8587 30.1674 35.8587 28.0125C35.8587 25.8577 35.0027 23.791 33.479 22.2673C31.9552 20.7436 29.8886 19.8875 27.7337 19.8875Z" />
        </svg> -->
        <svg v-if="platformNameU == 'PC'" class="fill-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11 17.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" />
            <path fill="currentColor" fill-rule="evenodd"
                d="M8 2a2.25 2.25 0 0 0-2.25 2.25v15.5A2.25 2.25 0 0 0 8 22h8a2.25 2.25 0 0 0 2.25-2.25V4.25A2.25 2.25 0 0 0 16 2zm-.75 2.25A.75.75 0 0 1 8 3.5h8a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75z"
                clip-rule="evenodd" />
        </svg>

        <svg v-else-if="platformNameU == 'PHONE'" class="fill-inherit" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z" />
        </svg>


        <!-- <div v-if="finished"
            class="absolute top-[-0.6em] right-[-0.6em] w-7 h-7 rounded-full bg-green-400 p-[0.4em] flex items-center">
            <svg viewBox="0 0 17 13" fill="none" class="w-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z" fill="black" />
            </svg>
        </div> -->
    </button>
</template>

<script lang="ts" setup>
import { active } from 'sortablejs';

const props = defineProps({
    platformName: {
        type: String,
        required: true
    },

    active: {
        type: Boolean,
        default: false
    },

});

const platformNameU = computed(() => props.platformName.toUpperCase());
const classStyle = computed(() => {
    if (props.active) {
        if (props.finished) {
            return 'bg-green-600 fill-gray-200 outline-4 outline-green-400 outline';
        } else {
            return 'bg-blue-600 fill-gray-200 outline-4 outline-blue-400 outline';
        }
    } else if (props.finished) {
        return 'bg-green-600 fill-gray-200';
    }
    return 'bg-gray-100 hover:bg-gray-300 fill-gray-800 hover:fill-gray-900';

});
</script>

<style></style>