import Vue from 'vue';

import router from './router';

import store from './store';

import 'element-ui/lib/theme-chalk/index.css';

import 'element-ui/lib/theme-chalk/display.css';

import ElementUI from 'element-ui';

import App from './app';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

router.beforeEach((to, from, next) => {
  // console.log(to.name);
  // console.log(sessionStorage.getItem("user"));
  // if(sessionStorage.getItem("user")==='admin'|| to.name === 'Login')
  // {
  //   next();
  // }
  next();
});
router.beforeResolve((to, from, next) => {
  // console.log('beforeResolve');
  next();
});
router.afterEach((to, from) => {
  // console.log('afterEach 全局后置钩子');
  // if (sessionStorage.getItem("user")==='' && to.name !== 'login') {
  //   router.push({ name: 'login' }); // 跳转login
  // }
});
