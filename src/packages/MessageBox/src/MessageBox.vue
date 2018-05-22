<template>
  <transition name="msgbox-fade">
    <div class="yg-message-box__wrapper"
      v-show="visible"
    >
      <div class="yg-message-box__mask" @click.self="handleWrapperClick()"></div>
      <div class="yg-message-box" v-if="type === 'confirm'">
        <div class="yg-message-box__close" @click="handleAction('cancel')"></div>
        <div class="yg-message-box__tip">
          <div class="yg-message-box__tip-icon"></div>
          <span class="yg-message-box__tip-text">{{title}}</span>
        </div>
        <div class="yg-message-box__content--confirm">
          <p class="yg-message-box__message" v-if="dangerouslyUseHTMLString" v-html="message"></p>
          <p class="yg-message-box__message" v-else>{{message}}</p>
        </div>
        <div class="yg-message-box__btns">
          <yg-button type="normal" class="yg-message-box__cancel" @click="handleAction('cancel')" v-if="showCancelButton">{{cancelButtonText}}</yg-button>
          <yg-button type="primary" v-if="showConfirmButton" @click="handleAction('confirm')">{{confirmButtonText}}</yg-button>
        </div>
      </div>
      <div class="yg-message-box" v-else>
        <div class="yg-message-box__title">
          {{title}}
          <div class="yg-message-box__close" @click="handleAction('cancel')"></div>
        </div>
        <div class="yg-message-box__content">
          <p class="yg-message-box__message" v-if="dangerouslyUseHTMLString" v-html="message"></p>
          <p class="yg-message-box__message" v-else>{{message}}</p>
          <yg-input class="yg-message-box__input" v-if="type === 'prompt'" v-model="inputValue" :placeholder="inputPlaceholder" :type="inputType"></yg-input>
        </div>
        <div class="yg-message-box__btns">
          <yg-button type="normal" class="yg-message-box__cancel" @click="handleAction('cancel')" v-if="showCancelButton">{{cancelButtonText}}</yg-button>
          <yg-button type="primary" @click="handleAction('confirm')" v-if="showConfirmButton">{{confirmButtonText}}</yg-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import YgInput from '../../Input/src/Input.vue';
import YgButton from '../../Button/src/Button.vue';

export default {
  data() {
    return {
      visible: false,
      title: null,
      message: '',
      action: '',
      type: '',
      closed: false,
      closeOnClickModal: true,
      closeOnHashChange: true,
      inputValue: '',
      inputPlaceholder: '',
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      dangerouslyUseHTMLString: false,
    };
  },
  methods: {
    handleAction(action) {
      this.action = action;
      this.doClose();
    },
    doClose() {
      if (!this.visible) return;
      this.visible = false;
      setTimeout(() => {
        if (this.action) this.callback(this.action, this);
      });
    },
    handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleAction('cancel');
      }
    },
    removeEventListener() {
      window.removeEventListener('hashchange', () => {
        this.handleAction('cancel');
      });
    },
  },
  mounted() {
    if (this.closeOnHashChange) {
      window.addEventListener('hashchange', () => {
        this.handleAction('cancel');
        this.removeEventListener();
      });
    }
  },
  components: {
    YgInput,
    YgButton,
  },
};
</script>
