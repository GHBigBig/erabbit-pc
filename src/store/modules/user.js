export default {
  namespaced: true, //所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
  state() {
    return {
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: '',
      },
    };
  },
  mutations: {
    setUser(state, payload) {
      state.profile = payload;
    },
  },
};
