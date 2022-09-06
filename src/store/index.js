import { createStore } from 'vuex';
import { createVuexPersistedState } from 'vue-persistedstate';

import user from './modules/user';
import cart from './modules/cart';
import category from './modules/category';

//创建 vuex 仓库并导出
export default createStore({
  state: {
    //状态：数据
  },
  mutations: {
    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  },
  actions: {
    // 提交的是 mutation，而不是直接变更状态。可以包含任意的异步操作，
  },
  modules: {
    //模块
    user,
    cart,
    category,
  },
  getters: {
    //store 的计算属性
  },
  plugins: [
    createVuexPersistedState({
      key: 'vuex',
      storage: window.localStorage,
      whiteList: ['user'],
    }),
  ],
});
