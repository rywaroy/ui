<template>
  <transition name="yg-message-fade">
    <div class="yg-message"
      :class="`yg-message--${type}`"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="yg-message__content" v-if="title">
        <div class="yg-message__icon--large"></div>
        <div class="yg-message__message--large">
          <div class="yg-message__title">{{title}}</div>
          <p class="yg-message__text">{{message}}</p>
        </div>
      </div>
      <div class="yg-message__content" v-else>
        <div class="yg-message__icon"></div>
        <p class="yg-message__message" v-html="message" v-if="dangerouslyUseHTMLString"></p>
        <p class="yg-message__message" v-else>{{message}}</p>
      </div>
      <div class="yg-message__close" v-if="showClose" @click="closed = true"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'YgMessage',
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      title: '',
      showClose: false,
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false,
    };
  },
  methods: {
    close() {
      this.closed = true;
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>
