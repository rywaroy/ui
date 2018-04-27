import Button from './src/Button.vue';

Button.install = function install(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
