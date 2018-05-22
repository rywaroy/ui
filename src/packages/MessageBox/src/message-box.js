import Vue from 'vue';
import msgboxVue from './MessageBox.vue';

const defaults = {
  title: null,
  message: '',
  type: '',
  showInput: false,
  closeOnClickModal: true,
  closeOnHashChange: true,
  inputValue: null,
  inputPlaceholder: '',
  inputType: 'text',
  // inputPattern: null,
  // inputValidator: null,
  // inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  dangerouslyUseHTMLString: false,
};

const MessageBoxConstructor = Vue.extend(msgboxVue);

let currentMsg;
let instance;
let msgQueue = [];

const defaultCallback = action => {
  if (currentMsg) {
    const callback = currentMsg.callback;
    if (typeof callback === 'function') {
      if (instance.showInput) {
        callback(instance.inputValue, action);
      } else {
        callback(action);
      }
    }
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        if (instance.showInput) {
          currentMsg.resolve({ value: instance.inputValue, action });
        } else {
          currentMsg.resolve(action);
        }
      } else if (action === 'cancel' && currentMsg.reject) {
        currentMsg.reject(action);
      }
    }
  }
};

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div'),
  });

  instance.callback = defaultCallback;
};

const showNextMsg = () => {
  if (!instance) {
    initInstance();
  }
  instance.action = '';

  if (!instance.visible || instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      const options = currentMsg.options;
      for (const prop in options) { // eslint-disable-line
        if (options.hasOwnProperty(prop)) { // eslint-disable-line
          instance[prop] = options[prop];
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback;
      }

      const oldCb = instance.callback;
      instance.callback = (action, instance) => {
        oldCb(action, instance);
        showNextMsg();
      };

      ['closeOnClickModal', 'closeOnHashChange'].forEach(prop => {
        if (instance[prop] === undefined) {
          instance[prop] = true;
        }
      });
      document.body.appendChild(instance.$el);

      Vue.nextTick(() => {
        instance.visible = true;
      });
    }
  }
};

const MessageBox = function (options, callback) {
  if (Vue.prototype.$isServer) return;
  if (typeof options === 'string') {
    options = {
      message: options,
    };
    if (typeof arguments[1] === 'string') {
      options.title = arguments[1];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => { // eslint-disable-line
      msgQueue.push({
        options: { ...defaults, ...options },
        callback,
        resolve,
        reject,
      });

      showNextMsg();
    });
  } else {
    msgQueue.push({
      options: { ...defaults, ...options },
      callback,
    });

    showNextMsg();
  }
};

MessageBox.alert = (message, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '提示';
  } else if (title === undefined) {
    title = '提示';
  }
  return MessageBox({
    title,
    message,
    type: 'alert',
    closeOnClickModal: false,
    ...options,
  });
};

MessageBox.confirm = (message, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '提示';
  } else if (title === undefined) {
    title = '提示';
  }
  return MessageBox({
    title,
    message,
    type: 'confirm',
    showCancelButton: true,
    ...options,
  });
};

MessageBox.prompt = (message, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '提示';
  } else if (title === undefined) {
    title = '提示';
  }
  return MessageBox({
    title,
    message,
    showCancelButton: true,
    showInput: true,
    type: 'prompt',
    ...options,
  });
};

MessageBox.close = () => {
  instance.doClose();
  instance.visible = false;
  msgQueue = [];
  currentMsg = null;
};

export default MessageBox;
