import axios from 'axios';
import store from '@/store';
import router from '@/router';

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/';
const instance = axios.create({
    baseURL,
    timeout: 5000
});

//如果本地有 token 就在头部携带
instance.interceptors.request.use(config => {
    const { profile } = store.state.user;
    if (profile.token) {
        config.headers.Authorization = profile.token;
    }
    return config;
}, err => {
    return Promise.reject(err);
});

//取出 data 数据，方便后续使用。
//如果服务器返回 401 状态码：
//1、清空 user 数据
//2、记录当前用户返回地址并以 params 的形式记录下来
//3、跳转到登录界面，如果存在 redirect params 那么就记录下来
instance.interceptors.response.use(res => res.data, err => {
    if (err.response && 401 === err.response.status) {
        store.commit('user/setUser', {});
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath);
        router.push(`/login?redirectUrl=${fullPath}`);
    }
    return Promise.reject(err);
});

// 请求工具函数
export default (url, method, submitData) => {
    return instance({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    });
}

export { baseURL };