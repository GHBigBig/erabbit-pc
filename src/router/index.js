import { createRouter, createWebHistory } from 'vue-router';

const Layout = () => import('@/views/RabbitLayout.vue'); //路由懒加载
const Home = () => import('@/views/home/RabbitIndex.vue');

//路由规则
//component (和 components) 配置接收一个返回 Promise 组件的函数，Vue Router 只会在第一次进入页面时才会获取这个函数
const routes = [
  { path: '/', component: Layout, children: [{ path: '/', component: Home }] },
];

//创建路由实例
const router = createRouter({
  //使用 html5 方式实现路由
  history: createWebHistory(),
  //配置路由规则
  routes,
});

export default router;
