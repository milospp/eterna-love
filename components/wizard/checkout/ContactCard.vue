<template>
    <div
        class="flex p-2 px-4 border border-gray-300 rounded-lg gap-4 items-center hover:bg-gray-200 group cursor-pointer">
        <span class=" text-gray-300 group-hover:text-gray-400">
            <slot name="icon"></slot>
        </span>
        <div>
            <h3 class="text-sm font-bold">{{ baseStore.fullname.value || 'Unesite podatke' }}</h3>
            <!-- <p class=" font-light text-sm">Kitoska 55 Slepcevic 21000</p> -->
            <p class=" font-light text-sm">{{ baseStore.phone.value }}</p>
            <p class=" font-light text-sm">{{ baseStore.email.value }}</p>
            <p v-if="purpose == 'SHIPPING'" class="font-light text-sm">{{ baseStore.street.value }} {{
                baseStore.streetNumber.value }} {{
                    baseStore.city.value }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    purpose: {
        type: String as PropType<'CONTACT' | 'SHIPPING'>,
        required: true
    }
});

const siteStore = useSiteStore();

const baseStore: ComputedRef<ContactData> = computed(() => {
    if (siteStore.checkout.shippingInfoForm == 'SAME') return siteStore.checkout.contactInfo
    return props.purpose === 'CONTACT' ? siteStore.checkout.contactInfo : siteStore.checkout.shippingInfo;
})

</script>

<style></style>