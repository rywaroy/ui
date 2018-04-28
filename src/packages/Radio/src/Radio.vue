<template>
  <div :class="['yg-radio', {'is-checked': this.isChecked}, {'is-disabled': this.disabled}]" @click="check()">
    <span class="yg-radio__input"></span>
    <span class="yg-radio__label"><slot></slot></span>
  </div>
</template>
<script>
export default {
  name: 'YgRadio',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    label: [String, Number],
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    check() {
      if (!this.disabled) {
        this.$emit('change', this.label);
      }
    },
    isCheck() {
      if (this.value === this.label) {
        this.isChecked = true;
      } else {
        this.isChecked = false;
      }
    },
  },
  mounted() {
    this.isCheck();
  },
  watch: {
    value() {
      this.isCheck();
    },
  },
};
</script>
