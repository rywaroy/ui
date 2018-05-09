<template>
  <div>
    <yg-button @click="visible = !visible">弹窗</yg-button>
    <yg-dialog :visible.sync="visible">
      <div class="dialog-box">
        <div class="dialog-close" @click="visible = false">✘</div>
        自定义内容，自义定宽高
      </div>
    </yg-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
};
</script>
<style>
.dialog-box {
  position: absolute;
  top: 200px;
  bottom: 200px;
  right: 200px;
  left: 200px;
  border: 1px solid #ccc;
  background: #fff;
}

.dialog-close {
  width: 50px;
  height: 50px;
  background: #fff;
}
</style>
