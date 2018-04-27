import Pagination from './src/Pagination.vue';

Pagination.install = function install(Vue) {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
