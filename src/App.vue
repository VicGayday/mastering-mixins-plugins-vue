<template>
  <div class="card">
    <h2>how plugins works in Vue?</h2>
    <button class="btn" @click="$alert('It works!')">Alert</button>
    <button class="btn primary" @click="openModal">Show modal</button>
    <teleport to="body">
      <app-modal
        v-if="modalVisibility"
        @close="closeModal"
        >
        </app-modal>
      </teleport>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AppModal from "@/components/AppModal.vue";
export default defineComponent({
  name: "App",
  components: { AppModal },
  setup() {
    const modalVisibility = ref(false);

    function openModal() {
      modalVisibility.value = true;
    }

    function closeModal() {
      modalVisibility.value = false;
    }

    return {
      modalVisibility,
      openModal,
      closeModal,
    }
  }
})
</script>