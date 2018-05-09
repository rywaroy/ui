<template>
  <div class="menu">
    <div class="nav">
      <ul>
        <li class="nav-item"><router-link :to="{name:'alert'}">alert 警告</router-link></li>
        <li class="nav-item"><router-link :to="{name:'button'}">Button 按钮</router-link></li>
        <li class="nav-item"><router-link :to="{name:'checkbox'}">Checkbox 多选框</router-link></li>
        <li class="nav-item"><router-link :to="{name:'input'}">Input 输入框</router-link></li>
        <li class="nav-item"><router-link :to="{name:'message'}">Message 消息提示</router-link></li>
        <li class="nav-item"><router-link :to="{name:'pagination'}">Pagination 分页</router-link></li>
        <li class="nav-item"><router-link :to="{name:'radio'}">Radio 单选框</router-link></li>
        <li class="nav-item"><router-link :to="{name:'dialog'}">Dialog 弹窗</router-link></li>
        <li class="nav-item"><router-link :to="{name:'switch'}">Switch 开关</router-link></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
@import '../assets/css/menu.scss'
</style>
