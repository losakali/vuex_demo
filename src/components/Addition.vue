<template>
  <div>
    <!-- 在template标签中 this是可以省略的 所以直接写Vue实例对象中挂载的属性就可以 -->
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="btnHandler1">不传参方式+1</button>
    <button @click="btnHandler2">传参方式+N</button>
    <button @click="btnHandler3">异步方式+1</button>
    <button @click="btnHandler4">异步方式+N</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btnHandler1() {
      // commit 的作用，就是调用 mutation 中的函数
      this.$store.commit("add");
    },
    // 传参方式
    btnHandler2() {
      this.$store.commit("addN", 2);
    },
    // 异步方式
    btnHandler3() {
      this.$store.dispatch("addAsync");
    },
    btnHandler4() {
      this.$store.dispatch("addNAsync", 2);
    },
  },
};
</script>

<style>
</style>