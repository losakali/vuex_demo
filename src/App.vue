<template>
  <div>
    <my-add></my-add>
    <p>-----------------------------</p>
    <my-sub></my-sub>
  </div>
</template>

<script>
// 导入加法组件
import Addition from "./components/Addition.vue";
// 导入减法组件
import Subtraction from "./components/Subtraction.vue";
export default {
  // 注册加减法组件
  components: {
    "my-add": Addition,
    "my-sub": Subtraction,
  },
};
</script>

<style>
</style>
