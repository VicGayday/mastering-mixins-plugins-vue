<template>
  <div class="container">
    <div class="card">
      <h2 v-color:[type]="color">About directives in vue</h2>
      <div class="form-control">
        <label for="input">Active by default</label>
        <input v-focus type="text" id="input">
      </div>
      <button class="btn" @click="changeColor">Change color</button>
      <button class="btn" @click="changeType">Change type</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AppAlert from '@/components/AppAlert.vue';
import AppBlock from '@/components/AppBlock.vue';
import focusDirective from './directives/focus.directive';
import colorDirective from './directives/color.directive.js';
export default defineComponent({
  name: "App",
  components: {
    AppAlert,
    AppBlock,
  },
  directives: {
  focus: focusDirective,
  color: colorDirective,
},
  setup() {
   const alert = ref(false);
   const color = ref('darkred');
   const type = ref('color');
   const toggleAlert = () => {
    alert.value = !alert.value
   }
   const changeColor = () => {
    color.value = 'blue'
   }

   const changeType = () => {
    type.value = type.value === 'color' ? 'backgroundColor' : 'color'
   }

   return {
    alert,
    toggleAlert,
    myColor,
    type,
    changeColor,
    changeType
   }
  }
})
</script>

