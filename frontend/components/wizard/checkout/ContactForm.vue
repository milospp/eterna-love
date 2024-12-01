<template>
    <div class="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">

        <div class=" col-span-2">
            <label for="name" class="mb-1 block text-sm font-medium text-gray-900"> Ime i prezime*
            </label>
            <input v-model="baseStore.fullname.value" type="text" id="name"
                class="block w-full rounded-lg border p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 border-gray-300 bg-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Petar Petrović" required />
        </div>

        <div class="col-span-2">
            <label for="your_email" class="mb-1 block text-sm font-medium text-gray-900">Email* </label>
            <input v-model="baseStore.email.value" type="email" id="your_email"
                class="block w-full rounded-lg border p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 border-gray-300 bg-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                placeholder="petarpetrovic@gmail.com" required />
        </div>


        <div class="col-span-2 mb-4">
            <label for="your_phone" class="mb-1 block text-sm font-medium text-gray-900">Broj telefona*
            </label>
            <input v-model="baseStore.phone.value" type="text" id="your_phone"
                class="block w-full rounded-lg border p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 border-gray-300 bg-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                placeholder="064xxxxxxx" required />
        </div>


        <div v-if="!siteStore.isPosterDigital" class="grid grid-cols-2 gap-x-4 gap-y-4 col-span-2 mt-2">
            <div>
                <label for="your_street" class="mb-1 block text-sm font-medium text-gray-900">Ulica*
                </label>
                <input v-model="baseStore.street.value" type="your_street" id="your_street_name"
                    class="block w-full rounded-lg border p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 border-gray-300 bg-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Bulevar despota Stefana" required />
            </div>


            <div>
                <label for="your_house_number" class="mb-1 block text-sm font-medium text-gray-900">Kućni
                    broj*
                </label>
                <input v-model="baseStore.streetNumber.value" type="text" id="your_house_number"
                    class="block w-full rounded-lg border p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 border-gray-300 bg-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="7" required />
            </div>


            <div>
                <label for="your_city" class="mb-1 block text-sm font-medium text-gray-900">Grad*
                </label>
                <input v-model="baseStore.city.value" type="text" id="your_city"
                    class="block w-full rounded-lg border p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 border-gray-300 bg-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Novi Sad" required />
            </div>


            <div>
                <label for="your_postal_code" class="mb-1 block text-sm font-medium text-gray-900">Poštanski
                    broj*
                </label>
                <input v-model="baseStore.zip.value" type="text" id="your_postal_code"
                    class="block w-full rounded-lg border p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 border-gray-300 bg-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="21000" required />
            </div>

            <div>
                <label for="your_country" class="mb-1 block text-sm font-medium text-gray-900">Država*
                </label>
                <input disabled v-model="baseStore.country.value" type="text" id="your_country"
                    class="block w-full rounded-lg border p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 border-gray-300 bg-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Srbija" required />
            </div>
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
const emit = defineEmits(['saved']);
const siteStore = useSiteStore();

const baseStore: ComputedRef<ContactData> = computed(() => {
    return props.purpose === 'CONTACT' ? siteStore.checkout.contactInfo : siteStore.checkout.shippingInfo;
})

function saveContect() {
    console.log('Check data');
    emit('saved');
}

</script>

<style></style>