import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/home/Home.vue';

//路由规则
const routes = [{ path: '/home', component: Home }];

//创建路由实例
const router = createRouter({
  //使用 html5 方式实现路由
  history: createWebHistory(),
  //配置路由规则
  routes,
});

export default router;
