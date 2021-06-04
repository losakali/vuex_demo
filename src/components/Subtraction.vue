<template>
  <div>
    <!-- 在template标签中 this是可以省略的 所以直接写Vue实例对象中挂载的属性就可以 -->
    <!-- <h3>当前最新的count值为：{{ count }}</h3> -->
    <h3>{{ showNum }}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="btnHandler2">减N</button>
    <button @click="btnHandler3">异步-1</button>
  </div>
</template>

<script>
// 导入 mapState 辅助函数 该函数是state的辅助函数
// {1,2,....} 为按需导入
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  // computed 计算属性
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNum"]),
  },
  methods: {
    // 把 mutations 中的方法映射到 组件的方法中 相当于把 mutations 的方法放到了这里 就不需要 this.$srote 调用 直接this调用
    ...mapMutations(["sub", "subN"]),
    ...mapActions(["subAsync", "addNAsync"]),
    btnHandler1() {
      // 调用 mutations 中的方法
      this.sub();
    },
    btnHandler2() {
      this.subN(2);
    },
    btnHandler3() {
      this.subAsync();
    },
  },
};
</script>

<style>
</style>