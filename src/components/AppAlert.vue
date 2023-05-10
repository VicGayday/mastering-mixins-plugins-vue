<template>
  <div class="alert" :class="alertType">
    <p class="alert-title">{{ alertTitle }}</p>
    <p>{{ alertText }}</p>
    <button class="btn" v-if="alertClosable" @click="emitClose" :class="type">{{ closeAlertText }}</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: "AppAlert",
  emits: ['close'],
  props: {
    text: String,
    title: String,
    closable: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
      required: false,
      validator(val) {
        return ['primary', 'danger', 'warning'].includes(val)
      }
    },
    closeText: String,
  },
  setup(props, { emit }) {
    const alertText = ref(props.text);
    const alertTitle = ref(props.title);
    const alertType = ref(props.type);
    const alertClosable = ref(props.closable);
    const closeAlertText = ref(props.closeText)
    const emitClose = () => {
      emit('close')
    }

    return {
      alertText,
      alertTitle,
      alertType,
      alertClosable,
      closeAlertText,
      emitClose,
    }
  }
})
</script>