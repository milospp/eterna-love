<template>
    <div>
        <input v-model="model" @change="changedValue" />
    </div>
</template>

<script lang="ts" setup>


const model: any = defineModel()



function update() {
    model.value++
}


</script>
<style lang="scss" scoped></style>