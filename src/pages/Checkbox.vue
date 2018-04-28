<template>
  <div>
    <yg-checkbox v-model="checkbox">单选</yg-checkbox>  是否选中： {{checkbox ? '是' : '否'}}
    <br>
    <br>
    <yg-checkbox-group v-model="group" @change="change">
      <yg-checkbox label="选项一" disabled>选项一</yg-checkbox>
      <yg-checkbox label="选项二" disabled>选项二</yg-checkbox>
      <yg-checkbox label="选项三">选项三</yg-checkbox>
      <yg-checkbox label="选项四">选项四</yg-checkbox>
    </yg-checkbox-group>
    <br>
    <br>
    已选中： {{group.join(',')}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkbox: true,
      group: ['选项一'],
    };
  },
  methods: {
    change(value) {
      console.log(value)
    }
  },
};
</script>
