<template>
  <div class="modal-backdrop" @click="closeModal">
    <div class="modal">
      <h3>Modal window</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tenetur at accusantium animi assumenda itaque, explicabo, enim aliquam nihil exercitationem eveniet, vitae similique possimus aliquid dolorum saepe autem dicta perspiciatis?</p>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: "AppModal",
    emits: ['close'],
    setup({emit}) {
      const closeModal = () => {
        emit('close')
      }

      return {
        closeModal,
      }
    }
  })
</script>