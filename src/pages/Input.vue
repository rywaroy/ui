<template>
  <div>
    <yg-input placeholder="占位" v-model="msg"/>
    <br>
    <br>
    <yg-input placeholder="可清除文字" size="small" :clearable="true" v-model="msg2"/>
    <br>
    <br>
    <yg-input placeholder="占位" size="mini"/>
    <br>
    <br>
    <yg-input placeholder="禁用" size="small" :disabled="true"/>
    <br>
    <br>
    <yg-input placeholder="文本框" type="textarea" v-model="msg4"/>
    <br>
    <br>
    <yg-input placeholder="自适应文本框" type="textarea" :autosize="size" v-model="msg3"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'hello',
      msg2: 'hh',
      msg3: '',
      msg4: '',
      size: { minRows: 4, maxRows: 13 },
    };
  },
};
</script>
