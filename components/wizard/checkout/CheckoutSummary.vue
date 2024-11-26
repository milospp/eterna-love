<template>
    <div class="bg-gray-100 rounded-lg p-8 shadow-lg shadow-black/2">
        <h2 class="text-xl font-semibold text-gray-900">Pregled porudžbine</h2>


        <div class="p-8 mb-4">
            <img class="max-h-[50vh] mx-auto border-[0.75em] border-gray-800"
                src="/public/images/eterna-love-example-pastel-1.png" alt="">
        </div>

        <div class=" space-y-4">
            <div class="flex" v-for="cartItem in calculateCart()">
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
    let total = 0
    total += posterPrice.value || 0
    total += formatPrice.value || 0
    total += paperTypePrice.value || 0
    total += framePrice.value || 0
    total += deliveryPrice || 0
    return total
})


// const cart = computed(() => calculateCart())

function updatePrice() {
    if (siteStore.posterConfig.format?.digital) {
        siteStore.posterConfig.paperType = undefined
        siteStore.posterConfig.frame = undefined
    }
}

function calculateCart() {
    updatePrice()

    let cart: Cart[] = []
    if (!siteStore.posterEdit.layout) return cart

    cart.push({
        title: 'Poster ' + siteStore.posterEdit.layout.dimX + 'x' + siteStore.posterEdit.layout.dimY,
        price: siteStore.posterEdit.layout.initPrice,
        quantity: 1
    })

    if (siteStore.posterConfig.format) {
        cart.push({
            title: siteStore.posterConfig.format.name,
            price: siteStore.posterConfig.format.price,
            quantity: 1
        })
    }

    if (siteStore.posterConfig.paperType?.id == 'GLOSSY') {
        cart.push({
            title: 'Sjajni papir',
            price: siteStore.posterConfig.paperType.price,
            quantity: 1
        })
    }

    if (siteStore.posterConfig.frame && siteStore.posterConfig.frame.id != 'NO') {
        cart.push({
            title: 'Ram za sliku',
            price: siteStore.posterConfig.frame.price,
            quantity: 1
        })
    }

    if (siteStore.posterConfig.format && !siteStore.posterConfig.format.digital) {
        cart.push({
            title: 'Dostava',
            price: deliveryPrice,
            quantity: 1
        })
    }

    return cart
}
</script>

<style></style>