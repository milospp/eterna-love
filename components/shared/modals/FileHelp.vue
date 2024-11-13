<template>
    <SharedModalsBaseModal :title="title" class="w-full" @confirm="emit('confirm')">
        <!-- <template #header>{{ title }}</template> -->

        <div class="px-20">



            <div>
                <h2 class="text-lg font-bold mb-4">Step-by-Step Tutorial</h2>
                <ol class="list-decimal list-inside">
                    <li class="mb-2">Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li class="mb-2">Step 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li class="mb-2">Step 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
                    <li class="mb-2">Step 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore.</li>
                    <li class="mb-2">Step 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                    </li>
                </ol>
            </div>
        </div>
        <template #footer>
            <div>
                <LazySharedButtonsButton @click="emit('confirm')" class="ml-auto">
                    Zatvori
                </LazySharedButtonsButton>
            </div>
        </template>
    </SharedModalsBaseModal>
</template>

<script lang="ts" setup>
defineProps<{
    title?: string
}>()


const emit = defineEmits<{
    (e: 'confirm'): void
}>()

function test() {
    alert("Outside click")
}
</script>

<style></style>