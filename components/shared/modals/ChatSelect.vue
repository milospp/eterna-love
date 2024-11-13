<template>
    <SharedModalsBaseModal :title="title" class="w-full min-w-6xl" @confirm="emit('confirm')">
        <!-- <template #header>{{ title }}</template> -->

        <div class="sm:px-20 w-full">
            <template v-if="props.chatsModalStep == 0">
                <template v-if="loading">
                    <SharedLoadingHeart />
                    <!-- <Spinner /> -->
                </template>

                <template v-else>
                    <!-- <Transition mode="out-in" name="fade"> -->
                    <div>
                        <h1 class="mb-2 text-lg font-medium">Odaberi chat</h1>

                        <WizardLoaderChatCardSelect :chats="chats" :loading="loading" @chatSelected="onChatSelected" />
                    </div>
                    <!-- </Transition> -->
                </template>
            </template>
            <template v-else="props.chatsModalStep == 1">
                <div>
                    <div @click="goBack"
                        class="inline-flex flex-shrink-0 cursor-pointer mb-10 text-slate-500 border-b border-transparent hover:border-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>

                        <span>
                            Nazad
                        </span>
                    </div>
                    <div class="mb-1 text-lg font-medium">Analiza</div>

                    <!-- <template v-if="!loading && loadingPercentage == 100"> -->
                    <client-only v-if="!loading && loadingPercentage == 100">
                        <Vue3Lottie :speed="0.4" :loop="false" animationLink="/animations/checkmark.json" :height="200"
                            :width="200" />
                    </client-only>

                    <!-- <Spinner /> -->
                    <!-- </template> -->

                    <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="h-6 bg-blue-600 rounded-full dark:bg-blue-500 transition-all duration-1000"
                            :style="'width: ' + loadingPercentage + '%'"></div>
                    </div>
                    <p>{{ loadingPercentage }}</p>
                </div>
            </template>
        </div>

        <!-- <template #footer>
            <div>
                <LazySharedButtonsButton @click="emit('confirm')" class="ml-auto">
                    Zatvori
                </LazySharedButtonsButton>
            </div>
        </template> -->
    </SharedModalsBaseModal>
</template>

<script lang="ts" setup>


const props = defineProps({
    title: String,
    chats: Object,
    loading: Boolean,
    chatsModalStep: {
        type: Number,
        default: 0
    },
    loadingPercentage: Number
})


const emit = defineEmits<{
    (e: 'confirm'): void;
    (e: 'chatSelected', chat?: ChatObject): void;
}>()


function onChatSelected(chat: ChatObject) {
    emit('chatSelected', chat)
}

function goBack() {
    emit('chatSelected', undefined)
}

function test() {
    alert("Outside click")
}
</script>

<style></style>