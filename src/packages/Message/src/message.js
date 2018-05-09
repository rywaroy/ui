import Vue from 'vue';
import Main from './Message.vue';

const MessageConstructor = Vue.extend(Main);
let instance;
let instances = [];
let seed = 1;

const Message = function (options) {
  options = options || {};
  if (typeof options === 'string') { 
    options = {
      message: options
    };
  }
  let id = 'message_' + seed++;
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

Message.close = function (id) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      instances.splice(i, 1);
      break;
    }
  }
};

Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;
