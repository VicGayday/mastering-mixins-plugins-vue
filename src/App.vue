<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="This is a very important message!"
      title="Attention!"
      type="warning"
      closeText="Закрыть"
      @close="alert = false"
      closable>
    </app-alert>
    <app-block></app-block>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Hide mesage' : 'Show message'}}</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AppAlert from '@/components/AppAlert.vue';
import AppBlock from '@/components/AppBlock.vue'
export default defineComponent({
  name: "App",
  components: {
    AppAlert,
    AppBlock,
  },
  setup() {
   const alert = ref(false);

   const toggleAlert = () => {
    alert.value = !alert.value
   }

   return {
    alert,
    toggleAlert,
   }
  }
})
</script>

