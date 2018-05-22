<template>
  <div>
    <yg-button @click="alert()">消息提示</yg-button>
    <yg-button @click="confrim()">确认消息</yg-button>
    <yg-button @click="prompt()">确认消息</yg-button>
  </div>
</template>
<script>
export default {
  methods: {
    alert() {
      this.$alert('内容', {
        closeOnClickModal: false,
        showCancelButton: true,
        confirmButtonText: '自定义按钮',
        cancelButtonText: '自定义取消',
      }).then(action => {
        console.log(action);
      });
    },
    confrim() {
      this.$confirm('确定删除', '提示').then(action => {
        console.log(action);
      });
    },
    prompt() {
      this.$prompt('邮箱', '提示', {
        inputPlaceholder: '占位',
      }).then(({ value }) => {
        console.log(value);
      });
    },
  },
};
</script>
