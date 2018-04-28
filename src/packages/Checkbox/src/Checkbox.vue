<template>
  <div :class="['yg-checkbox', {'is-disabled': this.disabled}, {'is-checked': this.isCheck}]" @click="check()">
    <span class="yg-checkbox__input"></span>
    <span class="yg-checkbox__label"><slot></slot></span>
  </div>
</template>
<script>
export default {
  name: 'YgCheckbox',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: Boolean,
    label: [String, Number],
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'YgCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },
    isCheck() {
      if (this.isGroup) {
        return this._checkboxGroup.value.includes(this.label);
      } else {
        return this.value;
      }
    },
  },
  methods: {
    check() {
      if (this.disabled) {
        return;
      }
      if (this.isGroup) {
        this._checkboxGroup.send(this.label, this.isCheck);
      } else {
        this.$emit('change', !this.value);
      }
    },
  },
};
</script>
