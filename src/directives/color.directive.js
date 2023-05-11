const colorDirective = {
  mounted(el, binding) {
    el.style[binding.arg] = binding.value
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value;
    console.log(binding);
  }
}

export default colorDirective;