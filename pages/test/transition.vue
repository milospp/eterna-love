<!--
FLIP list transitions with the built-in <TransitionGroup>.
https://aerotwist.com/blog/flip-your-animations/
-->

<script setup>
import { ref } from 'vue'

const getInitialItems = () => [1, 2, 3, 4, 5]
const items = ref(getInitialItems())
let id = items.value.length + 1

function insert() {
    const i = Math.round(Math.random() * items.value.length)
    items.value.splice(i, 0, id++)
}

function reset() {
    items.value = getInitialItems()
    id = items.value.length + 1
}

function shuffle() {
    items.value = items.value.sort(() => Math.random() - 0.5)
}

function remove(item) {
    const i = items.value.indexOf(item)
    if (i > -1) {
        items.value.splice(i, 1)
    }
}
</script>

<template>
    <button @click="insert">Insert at random index</button>
    <button @click="reset">Reset</button>
    <button @click="shuffle">Shuffle</button>

    <TransitionGroup tag="ul" name="fade" class="container">
        <li v-for="item in items" class="item" :key="item">
            {{ item }}
            <button @click="remove(item)">x</button>
        </li>
    </TransitionGroup>
</template>

<style>
.container {
    background: red;
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 0;
    gap: 2em;
    list-style-type: none;
}

.item {
    width: 100%;
    height: 30px;
    background-color: #f3f3f3;
    border: 1px solid #666;
    box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>