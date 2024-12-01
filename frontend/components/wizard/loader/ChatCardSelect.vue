<template>
    <div class="relative mb-4">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div>
        <input type="search" id="default-search" v-model="searchField"
            class="block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Unesite ime osobe" required />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-auto">
        <button @click="emit('chatSelected', chat)" v-for="chat in filteredChats"
            class="py-4 px-8 border rounded-lg text-left border-gray-200 hover:bg-gray-100">
            <div class="flex">
                <div v-if="chat.isGroup" class="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                </div>
                <h3 class="text-lg text-left truncate">{{ chat.chat_title || chat.chat_title || 'Chat' }}</h3>

            </div>
            <!-- <p class="text-sm text-slate-400 truncate"> {{ chat.chat_id }}</p> -->
            <p v-if="chat.last_chat_timestamp" class="text-sm text-slate-400 truncate"> pre {{
                fromatTimestampToDaysAgo(chat.last_chat_timestamp) }}
            </p>

        </button>
    </div>
</template>

<script lang="ts" setup>
const searchField = ref('')

const emit = defineEmits<{
    (e: 'chatSelected', chat: ChatObject): void;
}>()

const props = defineProps({
    chats: Object,
    loading: Boolean,
})

const filteredChats = computed(() => {
    if (!props.chats) return []

    let searchKey = searchField.value.toLowerCase()
    searchKey = searchKey.trim()
    return props.chats.filter(chat => {
        return (chat.chat_title && chat.chat_title.toLowerCase().includes(searchKey)) ||
            (chat.indexed_name && chat.indexed_name.toLowerCase().includes(unicodeToLatin(searchKey).toLowerCase())) || true

    })
})


function fromatTimestampToDaysAgo(timestamp: string) {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    let suffix = 'dana'
    if (days % 10 == 1 && (days % 100 > 20 || days % 100 == 1)) suffix = 'dan'


    return days + ' ' + suffix
}

</script>

<style></style>