<template>
  <div>
    <yg-button @click="getSuccess()">成功</yg-button>
    <br>
    <br>
    <br>
    <yg-button @click="getInfo()">消息</yg-button>
    <br>
    <br>
    <br>
    <yg-button @click="getWarning()">警告</yg-button>
    <br>
    <br>
    <br>
    <yg-button @click="getError()">错误</yg-button>
    <br>
    <br>
    <br>
    <yg-button @click="never()">不会消失</yg-button>
    <br>
    <br>
    <br>
    <yg-button @click="more()">更多提示</yg-button>
    <br>
    <br>
    <br>
    <yg-button @click="html()">html片段</yg-button>
    <br>
    <br>
    <br>
    <yg-button @click="close()">全部关闭提示</yg-button>
  </div>
</template>
<script>
import Message from '../packages/Message/src/Message.vue';

export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    Message,
  },
  methods: {
    getSuccess() {
      this.$message.success('这是一条成功消息');
    },
    getInfo() {
      this.$message.info('这是一条消息');
    },
    getWarning() {
      this.$message.warning('这是一条警告消息');
    },
    getError() {
      this.$message.error('这是一条错误消息');
    },
    never() {
      this.$message.info({
        message: '这是一条不会消失且可以关闭的消息',
        duration: 0,
        showClose: true,
      });
    },
    more() {
      this.$message.success({
        message: '文字说明',
        title: '成功文案',
      });
    },
    html() {
      this.$message.info({
        message: '<a href="https://www.baidu.com" target="_blank">链接到百度</a>',
        dangerouslyUseHTMLString: true,
      });
    },
    close() {
      this.$message.closeAll();
    },
  },
};
</script>
