import { createApp } from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';

const app = createApp(App); //创建应用实例

app.use(router); //安装插件
app.use(store);

app.mount('#app'); //将应用实例挂载在一个容器元素中。
