import Vue from 'vue'
import App from './App.vue'
// 导入 store 组件
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 在Vue实例对象中 挂载 store 实例对象 挂载的对象可以通过 this.$实例对象名称.属性 来访问实例对象中的各种属性
  store,
  render: h => h(App)
}).$mount('#app')
