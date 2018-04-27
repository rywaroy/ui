import Button from './Button/index';
import Pagination from './Pagination/index';

const components = [
  Button,
  Pagination,
];

const install = function install(Vue) {
  components.map(component => (
    Vue.component(component.name, component)
  ));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Pagination,
};
