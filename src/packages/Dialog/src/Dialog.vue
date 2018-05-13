<template>
  <transition name="dialog-fade">
    <div class="yg-dialog__wrapper" v-show="visible" :style="{zIndex: zIndex}">
      <div class="yg-dialog__mask" v-if="modals" @click.self="hide()"></div>
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'YgDialog',
  props: {
    visible: Boolean,
    modals: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: [String, Number],
      default: 1000,
    },
  },
  methods: {
    hide() {
      this.$emit('update:visible', false);
    },
  },
};
</script>

