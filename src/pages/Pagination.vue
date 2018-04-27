<template>
  <div>
    <p style="margin-bottom:10px;">总页数：{{total}} 当前页面:{{page}}</p>
    <yg-pagination :page-count="total" :current-page="page" @current-change="getPage" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      total: 10,
    };
  },
  methods: {
    getPage(page) {
      this.page = page;
    },
  },
};
</script>
