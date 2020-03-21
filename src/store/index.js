import Vue from 'vue'
import Vuex from 'vuex'

import {getters} from "./getters";
import {actions} from "./actions";
import {mutations} from "./mutations";

// 安装组件
Vue.use(Vuex)

// 导出数据存放
const state = {
  shopCartList: [],
}

// 实例化
const store = new Vuex.Store({
  // 共享数据存放
  state,
  // 同步函数
  mutations,
  // 异步函数
  actions,
  // 计算属性
  getters,

})

// 导出实例化
export default store