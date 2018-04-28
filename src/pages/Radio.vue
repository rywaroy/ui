<template>
  <div>
    <p style="margin-bottom:10px;">当前选中:{{radio}}</p>
    <yg-radio v-model="radio" label="选项一" disabled>选项一</yg-radio>
    <yg-radio v-model="radio" label="选项二" disabled>选项二</yg-radio>
    <yg-radio v-model="radio" label="选项三">选项三</yg-radio>
    <yg-radio v-model="radio" label="选项四">选项四</yg-radio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '选项一',
    };
  },
};
</script>

