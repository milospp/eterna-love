<template>
    <div
        class="flex p-2 px-4 border border-gray-300 rounded-lg gap-4 items-center hover:bg-gray-200 group cursor-pointer">
        <span class=" text-gray-300 fill-gray-300 group-hover:text-gray-400">
            <slot name="icon"></slot>
        </span>
        <div>
            <h3 class="text-sm font-bold">{{ paymentMethod }}
            </h3>

        </div>
    </div>
</template>

<script lang="ts" setup>

const siteStore = useSiteStore();

const paymentMethod = computed(() => {
    switch (siteStore.checkout.paymentInfo.paymentMethod.value) {
        case 'UPON_DELIVERY':
            return 'Plaćanje pouzećem';
        case 'BANK_TRANSFER':
            return 'Uplata na račun';
        case 'PAYPAL':
            return 'Paypal';
        case 'CARD':
            return 'Kartica';
        case 'APPLE_PAY':
            return 'Apple Pay';
        default:
            return 'Izaberi metod';
    };
})

</script>

<style></style>