<script setup lang="ts">
import ModalConfirm from '~/components/shared/modals/ModalConfirm.vue'
const { open, close } = useModal({
  component: ModalConfirm,
  attrs: {
    title: 'TEST Hello World!',
    onConfirm() {
      close()
    },
  },
  slots: {
    default: '<p>UseModal: The content of the modal</p>',
  },
})
</script>

<template>
  <button @click="() => open()">
    Open Modal
  </button>

  <!-- <ModalsContainer /> -->
</template>
