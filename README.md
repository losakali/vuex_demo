# 1.Vuex学习目标

能够说出Vuex的基本使用步骤

能够说出Vuex的核心概念

能够基于Vuex实现业务功能

# 2.Vuex概述

1. **组件之间共享数据的方式**

   （1）父向子传值：**v-bind 属性绑定**

   （2）子向父传值：**v-on 事件绑定**

   （3）兄弟组件之间共享数据：**EventBus**

   ​          $on 接收数据的那个组件     $emit 发送数据的那个组件

   

   

   

1. 2 **Vuex 是什么**

   Vuex是实现组件全局状态（数据）管理的一种机制，可方便的实现组件之间数据的共享。

   本质：**即用来组件间共享数据的 vuex里的数据是全局的 所有组件都可拿到**  **数据存到vuex 取也从vuex里取**

   

1. 3 **使用 Vuex 统一管理状态的好处**

   （1）能够在vuex中集中管理共享的数据，易于开发和后期维护

   （2）能够高效的实现组件之间的数据共享，提高开发效率 

   （3）存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

1. 4 **什么样的数据适合存储到 Vuex 中**

   一般情况下，只有组件共享的数据，才有必要存储到 vuex 中；对于组件中的私有数据 依旧存储在组件自身的 data 中即可。

# 3.Vuex的基本使用

## 1.安装vuex依赖包

```
npm install vuex --save
```

## 2.导入vuex包

```
import Vuex from 'vuex'

Vue.use(Vuex)
```

## 3.创建store对象

```
const store = new Vuex.Store({
   // state 属性中存放的就是全局共享的数据
   state:{
      id:5
   }
})
```

## 4.将store对象挂载到vue实例中

```
new Vue({
   el:'#app'，
   render:h=>h(app),
   router,
   // 将创建的共享数据对象，挂载到 Vue 实例中
   // 所有的组件，就可以直接从 store 中获取全局的数据了
   store
})
```

# 5.创建vuex_demo项目

## 1.要安装的插件

| 序号 | 选项                              | 描述                                                         | 选择 |
| ---- | --------------------------------- | ------------------------------------------------------------ | ---- |
| 1    | Choose Vue version                | 选择Vue版本                                                  | Y    |
| 2    | Babel                             | vue项目中普遍使用es6语法，但有时我们的项目需要兼容低版本浏览器，这时就需要引入babel插件，将es6转成es5 | Y    |
| 3    | TypeScript                        | TypeScript通过添加类型来扩展JavaScript。通过了解JavaScript，TypeScript可以节省您捕获错误的时间并在运行代码之前提供修复。任何浏览器，任何操作系统，任何运行JavaScript的地方。 完全开源 |      |
| 4    | Progressive Web App (PWA) Support | 渐进式Web应用程序（PWA）支持                                 |      |
| 5    | Router                            | 路由                                                         |      |
| 6    | Vuex                              | 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化 | Y    |
| 7    | CSS Pre-processors                | CSS预处理器，预处理器：比如要用sass或者cssNext就要按照人家规定的语法形式，就是用人家的语法去编写，然后人家把你编写的代码转成css。 |      |
| 8    | Linter / Formatter                | 格式化程序                                                   |      |
| 9    | Unit Testing                      | 单元测试                                                     | Y    |
| 10   | E2E Testing                       | 端到端（end-to-end）                                         |      |

## 2.创建好之后会自动把vuex插件导入main.js文件中（即上面的vuex的基本使用）

## 3.vuex的js文件存储位置

   src →  store → index.js

   初始结构如下

```
// 导入了vue组件
import Vue from 'vue'
// 导入了 vuex 组件
import Vuex from 'vuex'
// 全局注册了 vuex 组件
Vue.use(Vuex)

// 导出了实例对象
export default new Vuex.Store({
// state 属性中定义要全局共享的数据
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

```

4.然后我们再看看 main.js文件

```
import Vue from 'vue'
import App from './App.vue'
// 导入了store中导出的实例对象
import store from './store'

Vue.config.productionTip = false

new Vue({
// 把store实例对象挂载到Vue实例对象中
  store,
  render: h => h(App)
}).$mount('#app')
```

# 6.计数器案例

1.在components文件夹中创建自增自减组件

自增组件：Addition.vue

自减组件：Subtraction.vue

Addition.vue代码部分：

```
<template>
  <div>
    <h3>当前最新的count值为：</h3>
    <button>+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>
```

Subtraction.vue代码部分

```
<template>
  <div>
    <h3>当前最新的count值为：</h3>
    <button>-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>
```

2.在App.vue中导入加减法组件

```
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
  data() {},
  // 注册加减法组件
  components: {
    "my-add": Addition,
    "my-sub": Subtraction,
  },
};
</script>

<style>
</style>

```

# 7.Vuex的核心概念

Vuex中的主要核心概念如下

- State
- Mutation
- Action
- Getter

## 1.State

State提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。

```
// 创建store数据源，提供唯一公共数据
const store = new Vuex.Store({
   state:{
      count:0
   }
})
```

### 1.组件访问State中数据的第一种方式

因为在main.js中的Vue实例中挂载了该store实例对象 所以可以用 this.$store访问到store实例对象中的所有数据与方法 和 挂载在Vue实例中的 router 实例一样 this.$router

```
this.$store.state.全局数据名称
```

```
<template>
  <div>
    <!-- 在template标签中 this是可以省略的 所以直接写Vue实例对象中挂载的属性就可以 -->
    <h3>当前最新的count值为：{{ $store.state.count }}</h3>
    <button>+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>
```



### 2.组件访问State中数据的第二中方式

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：

 mapState是什么?

​    表面意思:mapState是state的辅助函数.这么说可能很难理解

​     抽象形容:mapState是state的语法糖,这么说可能你还想骂我,因为你根本不了解什么叫做语法糖,事实上我说的语法糖有自己的定义,什么是语法糖?我对语法糖的理解就是,用之前觉得,我明明已经对一种操作很熟练了,并且这种操作也不存在什么问题,为什么要用所谓的"更好的操作",用了一段时间后,真香!

实际作用:当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键

在使用mapState之前,要导入这个辅助函数

```
// 1.从 vuex 中按需导入 mapState 函数
import { mapState } from 'vuex'
```

通过刚才导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性：

```
// 2.将全局数据，映射为当前组件的计算属性
computed:{
  ...mapState(['count',.....])
}
```

上面这一步 ...展开运算符的操作相当于把state中的全局数据 一个个展开在计算属性中

```
<template>
  <div>
    <!-- 在template标签中 this是可以省略的 所以直接写Vue实例对象中挂载的属性就可以 -->
    <h3>当前最新的count值为：{{ count }}</h3>
    <button>-1</button>
  </div>
</template>

<script>
// 导入 mapState 辅助函数 该函数是state的辅助函数
// {} 为按需导入
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  // computed 计算属性
  computed: {
    ...mapState(["count"]),
  },
};
</script>

<style>
</style>
```

## 2.Mutation

### 1.触发mutations的第一种方式

#### 1.Mutation 用于变更 Store 中 的数据

（1）vuex中只能通过mutation变更Store数据，不可以直接操作Store中的数据。

（2）通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控松油数据的变化。

**第一步：**

 src →  store → index.js

```
export default new Vuex.Store({
  // 共享数据 state
  state: {
    count: 0
  },
  mutations: {
    // 形参state是上面的全局对象
    add(state){
      //变更状态
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})

```

**第二步：**

在需要对state数据进行更改的组件中触发mutations

```
// 触发mutation
methods:{
  handlel(){
    // 触发 mutations 的第一种方式
    // commit 的作用，就是调用 mutation 中的函数
    this.$store.commit('add')
  }
}
```

#### 2.可以在触发mutations时传递参数

**第一步：**

 src →  store → index.js

```
export default new Vuex.Store({
  // 共享数据 state
  state: {
    count: 0
  },
  mutations: {
    // 形参state是上面的全局对象
    // 传递参数 在state后面添加形参即可
    addN(state,形参1，...){
      //变更状态
      state.count += 形参1
    }
  },
  actions: {
  },
  modules: {
  }
})

```

**第二步：**

在需要对state数据进行更改的组件中触发mutations

```
// 触发mutation
methods:{
  handlel(){
    // 通过调用commit函数 调用我们在 mutations 中定义的方法
    this.$store.commit('addN'，参数1，...)
  }
}
```



### 2.触发mutations的第二种方式

this.$store.commit() 是触发 mutations 的第一种方式，触发 mutations 的第二种方式：

在需要调用 mutations 中的方法的组件中导入

```
// 1.从 vuex 中按需导入 mapMutations 函数
import { mapMutations } from 'vuex'
```

通过刚才导入的 mapMutations 函数，将需要的 mutations 函数，映射为当前组件的 methods 方法：

```
methods:{
  ...mapMutations(['add','addN'])
}
```

具体例子如下：

```
<template>
  <div>
    <!-- 在template标签中 this是可以省略的 所以直接写Vue实例对象中挂载的属性就可以 -->
    <h3>当前最新的count值为：{{ count }}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="btnHandler2">减N</button>
  </div>
</template>

<script>
// 导入 mapState 辅助函数 该函数是state的辅助函数
// {1,2,....} 为按需导入
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  // computed 计算属性
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    // 把 mutations 中的方法映射到 组件的方法中 相当于把 mutations 的方法放到了这里 就不需要 this.$srote 调用 直接this调用
    ...mapMutations(["sub", "subN"]),
    btnHandler1() {
      // 调用 mutations 中的方法
      this.sub();
    },
    btnHandler2() {
      this.subN(2);
    },
  },
};
</script>

<style>
</style>
```

也可这样调用：

```
<button @click="sub">-1</button>
```

因为方法映射到了组件的methods中 所以可以直接使用

### 3.Mutation注意事项

1.不要在mutation的方法中做异步操作 比如向 **延时等操作**

​    如果在里面做了异步操作 那么组件中全局绑定的值将不能更新

## 3.Action 

Action 用于处理异步任务

Action 没有直接修改 state 中数据的权力 只有借助 Mutation  中的方法修改

如果通过异步操作变更数据，必须通过 Action,而不能使用 Mutation，但是在Action中还是要通过触发 Mutation 的方式间接变更数据。

#### 1.异步修改第一种方式

具体操作如下：

actions中函数的异步任务调用mutations中的方法 → 组件中再调用 actions 中的函数

**第一步：**

 src →  store → index.js

```
export default new Vuex.Store({
  // 共享数据 state
  state: {
    count: 0
  },
  mutations: {
    // 自增方法
    add(state) {
      state.count++
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(()=>{
        // 在异步任务中调用 add 方法
        // context是store的实例对象
        // commit 的作用，就是调用 mutation 中的函数
        context.commit('add')
      },1000)
    }
  },
  modules: {
  }
})
```

**第二步：**

在调用方法的组件中

```
// 触发 Action
methods: {
  handel() {
    // 触发 actions 的第一种方式
    // 通过 store中的dispatch函数调用 actions 中的 addAsync 方法
    this.$store.dispatch('addAsync')
  }
}
```



#### 2.触发 actions 异步任务时携带参数

 src →  store → index.js

```
export default new Vuex.Store({
  // 共享数据 state
  state: {
    count: 0
  },
  mutations: {
    // 自增方法
  addN(state, step) {
      state.count += step
    },
  },
  actions: {
    addNAsync(context,step) {
      setTimeout(()=>{
        // 在异步任务中调用 add 方法
        // context是store的实例对象
        // commit 的作用，就是调用 mutation 中的函数
        context.commit('addN',step)
      },1000)
    }
  },
  modules: {
  }
})
```

在调用方法的组件中

```
// 触发 Action
methods: {
  handel() {
    // 触发 actions 的第一种方式
    // 通过 store中的dispatch函数调用 actions 中的 addAsync 方法
    this.$store.dispatch('addNAsync',2)
  }
}
```

#### 3.触发 action 的第二种方式

1.从 vuex 中按需导入 mapActions 函数

```
import { mapActions } from 'vuex'
```

 通过刚才导入的 mapActions 函数，将需要的 actions 函数，映射为当前组件的 methods 函数

2.将指定的 actions 函数，映射为当前组件的 methods 函数

```
methods:{
// 映射 actions  中的方法
 ...mapActions(['addAsync','addNAsync',...])
 // 调用 actions  中的方法
 handel(){
   this.addAsync();
 }
}
```

剩下的传参也和上面的操作一样 就不描述了

## 4.Getter

Getter 用于对 Store 中的数据进行加工处理形成新的数据。

即以一种新的方式输出

注意：Getter不会修改Store里面的原数据 它只会起到一个包装数据的作用

（1）Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似Vue的计算属性

（2）Store 中数据发生变化，Getter的数据也会跟着变化

```
// 定义 Getter
const store = new Vuex.Store({
  state:{
    count:0
  },
  getters:{
   // 自定义 showNum函数 
    showNum(state) {
      return "当前最新的数量是 【" + state.count + "】"
    }
  }
})
```

### 1.使用getters的第一种方式

```
this.$store.getters.名称
```

演示：

在使用的组件中

```
<h3>{{ $store.getters.showNum }}</h3>
```

浏览器中输出为

```
当前最新的数量是 【2】
```

### 2.使用getters的第二种方式

```
// 定义 Getter
const store = new Vuex.Store({
  state:{
    count:0
  },
  getters:{
   // 自定义 showNum函数 
    showNum(state) {
      return "当前最新的数量是 【" + state.count + "】"
    }
  }
})
```

在要使用的组件中按需导入

```
import { mapGetters } from 'vuex'

// 映射在组件的计算属性中
computed: {
  ...mapGetters(['showNum'])
}
```

html中

```
<h3>{{ showNum }}</h3>
```

浏览器中输出为

```
当前最新的数量是 【2】
```

