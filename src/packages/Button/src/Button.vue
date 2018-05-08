<template>
  <button class="yg-button"
    @click="handleClick"
    :class="[
      `yg-button--${type}`,
      `yg-button--${size}`,
      {
        'is-disabled': disabled,
      }
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'YgButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
};
</script>
