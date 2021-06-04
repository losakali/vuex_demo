import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 共享数据 state
  state: {
    count: 0
  },
  // 组件中共享方法
  mutations: {
    // 不传参方式
    add(state) {
      state.count++
    },
    // 传参方式 函数名(state,形参1,形参2,....)
    addN(state, step) {
      state.count += step
    },
    // 自减
    sub(state) {
      state.count--
    },
    // 自减传参方式
    subN(state, step) {
      state.count -= step
    }
  },
  // 异步方式
  actions: {
    // 加法
    // addAsync 是自定义的方法名 
    addAsync(context) {
      setTimeout(() => {
        // 在异步任务中调用 add 方法
        context.commit('add')
      }, 1000)
    },
    // 异步 传参的方式
    addNAsync(context, step) {
      setTimeout(() => {
        // 在异步任务中调用 add 方法
        context.commit('addN', 2)
      }, 1000)
    },
    // 减法
    subAsync(context) {
      setTimeout(() => {
        // 在异步任务中调用 add 方法
        context.commit('sub')
      }, 1000)
    },
  },
  // 包装数据
  getters: {
    // 自定义 showNum函数 
    showNum(state) {
      return "当前最新的数量是 【" + state.count + "】"
    }
  },
  modules: {
  }
})
