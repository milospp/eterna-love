<template>
  <div as="nav" class="">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <!-- <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton> -->
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start sm:absolute inset-y-0 left-0">
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink to="/">
              <img loading="lazy" class="h-8 w-auto lg:hidden" src="/assets/static/EternaLoveHeartSmallLogo.svg"
                alt="Eterna Love" />
              <img loading="lazy" class="hidden h-8 w-auto lg:block" src="/assets/static/EternaLoveLogo.svg"
                alt="Eterna Love" />
            </NuxtLink>
          </div>
        </div>

        <div class="hidden sm:flex-1 sm:items-center sm:justify-center sm:flex">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900', 'rounded-md px-3 py-2 text-sm font-bold']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>


        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button"
            class="flex relative gap-2 py-1 px-2 rounded-full bg-black bg-opacity-20 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span class="absolute -inset-1.5" />
            <span class="sr-only">Language</span>
            <span class=" pr-1 text-sm">SR</span>

          </button>
        </div>
      </div>
    </div>

    <!-- <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'text-gray-900' : 'hover:text-gray-700', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel> -->
  </div>
</template>

<script setup>
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Proizvod', href: '#', current: true },
  { name: 'Uputstvo', href: '#', current: false },
  { name: 'Kontakt', href: '#', current: false },
]
</script>

<style scoped>
.red {
  background: #B197FF
}
</style>