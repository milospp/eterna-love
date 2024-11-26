<template>
    <div class="grid md:grid-cols-2 gap-8" v-if="!siteStore.checkout.isOrderPlaced">
        <div>
            <WizardCheckoutForm />
        </div>
        <div>
            <WizardCheckoutSummary />
        </div>
    </div>
    <div v-else class="text-center py-20">
        <h1 class=" text-3xl text-white font-bold mb-4">Uspešno ste poručili vaš poster!</h1>
        <p class="text-sm text-gray-300">Na mejl su Vam poslate informacije o porudžbini</p>
        <Vue3Lottie :speed="1" :loop="true" animationLink="/animations/package-success.json" :height="300"
            :width="300" />
    </div>
</template>

<script lang="ts" setup>



const siteStore = useSiteStore();


const ordered = ref(false);

function placeOrder() {
    ordered.value = true;
}

</script>

<style scoped></style>