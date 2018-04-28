<template>
  <div class="yg-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YgCheckboxGroup',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: Array,
  },
  methods: {
    send(label, type) {
      if (type) {
        const index = this.value.indexOf(label);
        this.value.splice(index, 1);
      } else {
        this.value.push(label);
      }
      this.$emit('change', this.value);
    },
  },
};
</script>
