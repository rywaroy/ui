import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import Alert from '@/pages/Alert.vue';
import Button from '@/pages/Button.vue';
import Checkbox from '@/pages/Checkbox.vue';
import Input from '@/pages/Input.vue';
import Message from '@/pages/Message.vue';
import Pagination from '@/pages/Pagination.vue';
import Radio from '@/pages/Radio.vue';
import Select from '@/pages/Select.vue';
import Switch from '@/pages/Switch.vue';
import Dialog from '@/pages/Dialog.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/alert',
          name: 'alert',
          component: Alert,
        },
        {
          path: '/button',
          name: 'button',
          component: Button,
        },
        {
          path: '/checkbox',
          name: 'checkbox',
          component: Checkbox,
        },
        {
          path: '/input',
          name: 'input',
          component: Input,
        },
        {
          path: '/message',
          name: 'message',
          component: Message,
        },
        {
          path: '/pagination',
          name: 'pagination',
          component: Pagination,
        },
        {
          path: '/radio',
          name: 'radio',
          component: Radio,
        },
        {
          path: '/select',
          name: 'select',
          component: Select,
        },
        {
          path: '/switch',
          name: 'switch',
          component: Switch,
        },
        {
          path: '/dialog',
          name: 'dialog',
          component: Dialog,
        },
      ],
    },
  ],
});
