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
    <br>
    <br>
    <yg-checkbox label="选项四" :indeterminate="isIndeterminate" v-model="fruitsAll" @change="changeAllFruits">全选</yg-checkbox>
    <yg-checkbox-group v-model="fruitsSelect" @change="changeFruits">
      <yg-checkbox :label="item" v-for="(item, index) in fruits" :key="index">{{item}}</yg-checkbox>
    </yg-checkbox-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkbox: true,
      group: ['选项一'],
      isIndeterminate: false,
      fruitsAll: false,
      fruitsSelect: ['苹果'],
      fruits: ['香蕉', '苹果', '西瓜', '橘子', '桃子', '梨'],
    };
  },
  methods: {
    change(value) {
      console.log(value);
    },
    changeAllFruits(value) {
      this.fruitsSelect = value ? JSON.parse(JSON.stringify(this.fruits)) : [];
      this.isIndeterminate = false;
    },
    changeFruits(value) {
      const checkedCount = value.length;
      this.fruitsAll = checkedCount === this.fruits.length;
      this.isIndeterminate = checkedCount > 0 && value.length < this.fruits.length;
    },
  },
};
</script>
