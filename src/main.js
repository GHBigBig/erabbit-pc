import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import 'normalize.css';

const app = createApp(App); //创建应用实例

app.use(router); //安装插件
app.use(store);
app.use(ElementPlus); //完整导入ElementPlus

app.mount('#app'); //将应用实例挂载在一个容器元素中。
