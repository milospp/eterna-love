<template>
    <div class="p-4">
        test
        <ul>
            <li>1 WORKS</li>
            <li>2 WORKS</li>
            <li>3 WORKS</li>
            <li>4 WORKS</li>
            <li>5 WORKS</li>
            <li>6 WORKS</li>
        </ul>
    </div>
</template>

<script setup>

import { Sortable, Plugins } from '@shopify/draggable';

onMounted(() => {

    const sortable = new Sortable(document.querySelectorAll('ul'), {
        draggable: 'li',
        swapAnimation: {
            duration: 200,
            easingFunction: 'ease-in-out',
            horizontal: true,
        },
        plugins: [Plugins.SwapAnimation], // Or [SwapAnimation]
    });

})
</script>



<style lang="scss" scoped></style>