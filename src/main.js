// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import '@/packages/styles/index.less';
import App from './App.vue';
import router from './router';
import UI from './packages/index';
import './assets/css/normalize.css';


Vue.config.productionTip = false;
Vue.use(UI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
