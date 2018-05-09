import Button from './Button/index';
import Pagination from './Pagination/index';
import Radio from './Radio/index';
import Checkbox from './Checkbox/index';
import CheckboxGroup from './CheckBoxGroup/index';
import Input from './Input/index';
import Dialog from './Dialog/index';

const components = [
  Button,
  Pagination,
  Radio,
  Checkbox,
  CheckboxGroup,
  Input,
  Dialog,
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
  Radio,
  Checkbox,
  CheckboxGroup,
  Input,
  Dialog,
};
