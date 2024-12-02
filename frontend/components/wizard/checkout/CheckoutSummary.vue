<template>
    <div class="bg-gray-100 rounded-lg p-8 shadow-lg shadow-black/2">
        <h2 class="text-xl font-semibold text-gray-900">Pregled porudžbine</h2>


        <div class="p-8 mb-4">
            <img class="max-h-[50vh] mx-auto border-[0.75em] border-gray-800"
                src="/public/images/eterna-love-example-pastel-1.png" alt="">
        </div>

        <div class=" space-y-4">
            <div class="flex" v-for="cartItem in siteStore.cartItems">
                <span class="text-neutral-800">{{ cartItem.title }}</span>
                <span v-if="cartItem.price" class="ml-auto text-neutral-800">{{ cartItem.price }} RSD</span>
                <span v-else class="ml-auto text-neutral-800">Besplatno</span>
            </div>

            <hr>

            <div class="flex">
                <span class="text-neutral-800">Ukupno</span>
                <span class="text-neutral-800 ml-auto">{{ totalPrice }} RSD</span>
            </div>
        </div>
        <pre>
            {{ siteStore.cartItems }}
        </pre>


    </div>
</template>

<script lang="ts" setup>
const siteStore = useSiteStore()
const posterPrice = computed(() => siteStore.posterEdit.layout?.initPrice)

const formatPrice = computed(() => siteStore.posterConfig.format?.price)
const formatPriceText = computed(() => formatPrice.value ? `${formatPrice.value} RSD` : 'Besplatno')

const paperTypePrice = computed(() => siteStore.posterConfig.paperType?.price)

const framePrice = computed(() => siteStore.posterConfig.frame?.price)

const deliveryPrice = 300

const totalPrice = computed(() => {
    updatePrice()

    return siteStore.cartItems.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0)
})

// const cart = computed(() => calculateCart())

function updatePrice() {
    if (siteStore.posterConfig.format?.digital) {
        siteStore.posterConfig.paperType = undefined
        siteStore.posterConfig.frame = undefined
    }
}

</script>

<style></style>