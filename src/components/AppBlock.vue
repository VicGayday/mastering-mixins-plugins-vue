<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="This is a very important message!"
      title="Attention!"
      closeText="Закрыть"
      @close="alert = false"
    >
    </app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Hide mesage' : 'Show message'}}</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AppAlert from '@/components/AppAlert.vue';
export default defineComponent({
  name: "AppBlock",
  components: {
    AppAlert,
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

