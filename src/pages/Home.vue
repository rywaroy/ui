<template>
  <div class="page">
      <Menu></Menu>
      <div class="home-content">
          <router-view/>
      </div>
  </div>
</template>
<script>
import Menu from '../components/Menu.vue';

export default {
  components: {
    Menu,
  },
};
</script>
<style lang="sass">
@import '../assets/css/home.scss'
</style>
