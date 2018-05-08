<template>
  <div
    :class="[
      type === 'textarea' ? 'yg-textarea' : 'yg-input',
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <input class="yg-input__inner"
      ref="input"
      :class="`yg-input__inner--${size}`"
      v-if="type !== 'textarea'"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxlength"
      :readonly="readonly"
      :value="value"
      @change="handleChange"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <textarea class="yg-textarea__inner"
      v-else
      ref="textarea"
      :placeholder="placeholder"
      :disabled="disabled"
      :style="textareaStyle"
      :maxlength="maxlength"
      :readonly="readonly"
      :value="value"
      @change="handleChange"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    ></textarea>
    <i v-if="showClearIcon" class="yg-input-clear" @click="clear()"></i>
  </div>
</template>
<script>
import calcTextareaHeight from './calcTextareaHeight';

export default {
  name: 'YgInput',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    size: {
      type: String,
      default: 'medium',
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    maxlength: Number,
    readonly: {
      type: Boolean,
      default: false,
    },
    value: [String, Number],
    clearable: {
      type: Boolean,
      default: false,
    },
    resize: {
      type: String,
      default: 'none',
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
  },
  data() {
    return {
      focused: false,
      hovering: false,
      textareaCalcStyle: {},
    };
  },
  computed: {
    showClearIcon() {
      if (!this.disabled && this.value && this.clearable && (this.focused || this.hovering)) {
        return true;
      } else {
        return false;
      }
    },
    textareaStyle() {
      return { ...this.textareaCalcStyle, resize: this.resize };
    },
  },
  methods: {
    focus() {
      (this.$refs.input || this.$refs.textarea).focus();
    },
    handleChange(event) {
      const value = event.target.value;
      this.$emit('change', value);
    },
    handleInput(event) {
      const value = event.target.value;
      this.$emit('change', value);
      if (this.type === 'textarea') {
        this.$nextTick(() => {
          this.resizeTextarea();
        });
      }
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
      this.focus();
    },
    resizeTextarea() {
      const { autosize, type } = this;
      if (type !== 'textarea') return;
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight,
        };
        return;
      }
      const minRows = autosize.minRows;
      const maxRows = autosize.maxRows;
      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
  },
  mounted() {
    this.resizeTextarea();
  },
};
</script>
