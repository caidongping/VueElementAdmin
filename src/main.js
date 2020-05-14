import Vue from 'vue';

import router from './router';

import store from './store';

import axios from 'axios';

import 'element-ui/lib/theme-chalk/index.css';

import 'element-ui/lib/theme-chalk/display.css';

import has from './public/js/btnPermissions.js';

import ElementUI from 'element-ui';

import App from './app';

Vue.config.productionTip = false;


Vue.use(ElementUI)

//将axios挂载到原型上
Vue.prototype.$axios = axios;

axios.defaults.baseURL = '/api'  //关键代码

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

router.beforeEach((to, from, next) => {
  console.log(to.path);
  // console.log(sessionStorage.getItem("user"));
  // if(sessionStorage.getItem("user")==='admin'|| to.name === 'Login')
  // {
  //   next();
  // }
  next();
  // if (to.path === '/login') {
  //   next();
  // } else {
  let token = localStorage.getItem('token');
  console.log(token);
  console.log(token === null);
  if (token === null || token === '') {
    //router.push({ name: 'login' }); 
    //next({ path: "/login",query: {redirect: to.fullPath} });
  } else {
    next();
  }
  // }
});
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve');
  // console.log(to);
  // console.log(from);
  next();
});
router.afterEach((to, from) => {
  //console.log(to);
  // console.log(from);
  console.log('afterEach 全局后置钩子');
  // if (sessionStorage.getItem("user")==='' && to.name !== 'login') {
  //   router.push({ name: 'login' }); // 跳转login
  // }
});
