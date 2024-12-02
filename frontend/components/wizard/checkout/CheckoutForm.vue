<template>
    <div class="space-y-8 bg-gray-100 rounded-lg p-8 shadow-lg shadow-black/20">

        <Transition name="fade" mode="out-in">
            <WizardCheckoutCustomerInfoForm v-if="showContact" @saved="savedContact" />
            <WizardCheckoutContactCard v-else @click="editContact" purpose="CONTACT">
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>
                </template>
            </WizardCheckoutContactCard>
        </Transition>

        <Transition name="fade" v-if="!siteStore.isPosterDigital">
            <div v-if="!showContact">
                <Transition name="fade" mode="out-in">
                    <WizardCheckoutShipAddressForm v-if="showShipAddressForm" @saved="savedShipAddress" />
                    <WizardCheckoutContactCard v-else @click="editShipAddress" purpose="SHIPPING">
                        <template #icon>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        </template>
                    </WizardCheckoutContactCard>
                </Transition>
            </div>
        </Transition>


        <Transition name="fade">
            <div v-if="shippingAdressCompleted">
                <Transition name="fade" mode="out-in">
                    <WizardCheckoutPaymentOptions v-if="showPaymentOptions" @saved="savePaymentOptions" />
                    <WizardCheckoutPaymentOptionCard v-else @click="editPaymentOptions">
                        <template #icon>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                            </svg>

                        </template>
                    </WizardCheckoutPaymentOptionCard>
                </Transition>
            </div>
        </Transition>
        <Transition name="fade">
            <div v-if="shippingAdressCompleted && !showPaymentOptions">

                <WizardCheckoutIpsPayment
                    v-if="siteStore.checkout.paymentInfo.paymentMethod.value == 'BANK_TRANSFER'" />

                <div v-if="errorMessage" class="text-red-500 mb-4">
                    {{ errorMessage }}
                </div>

                <SharedButtonsAction @click="placeOrder" class="px-24 py-4 mx-auto font-bold" :disabled="isLoading">
                    <span v-if="!isLoading">Poruči</span>
                    <span v-else>Loading...</span>
                </SharedButtonsAction>
            </div>
        </Transition>
    </div>

</template>

<script lang="ts" setup>
import { useSiteStore } from '../../../stores/siteStore';

const siteStore = useSiteStore();
const showContact = ref(true);
const showShipAddressForm = ref(true);
const showPaymentOptions = ref(true);
const errorMessage = ref('');
const isLoading = ref(false)
const runtimeConfig = useRuntimeConfig()


const shippingAdressCompleted = computed(() => {
    if (siteStore.isPosterDigital) return !showContact.value;

    return !showShipAddressForm.value && !showContact.value
})


function placeOrder() {
    isLoading.value = true;

    let payload = getCheckoutData(siteStore);
    apiPostOrder(payload)
        .then(data => {
            if (data.status === 201) {
                console.log('Success:', data);
                siteStore.checkout.isOrderPlaced = true;
            } else {
                errorMessage.value = "Uneti podaci nisu ispravni, kontaktirajte nas putem mejla ako ne uspete da rešite"
                console.error('Failed to place order:', data);
            }
        })
        .catch((error) => {
            errorMessage.value = "Problem sa serverom, probajte kasnije"
            console.error('Error:', error);
        })
        .finally(() => {
            isLoading.value = false;
        });
}

function editContact() {
    showContact.value = true;
}

function savedContact() {
    showContact.value = false;
}

function editShipAddress() {
    showShipAddressForm.value = true;
}

function savedShipAddress() {
    showShipAddressForm.value = false;
}

function editPaymentOptions() {
    showPaymentOptions.value = true;
}

function savePaymentOptions() {
    showPaymentOptions.value = false;
}
</script>

<style scoped>
.delayed-fade-in .fade-enter-active {
    transition-delay: 0.25s;
}

.delayed-fade-in .fade-leave-active {
    transition-delay: 0s;
}
</style>