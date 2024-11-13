import { defineNuxtPlugin } from 'nuxt/app';
import Sortable, { Swap } from 'sortablejs';

export default defineNuxtPlugin((nuxtApp) => {
    Sortable.mount(new Swap())
})
