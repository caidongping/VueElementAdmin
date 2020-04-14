import Vue from 'vue'

import Router from 'vue-router'

import Login from '@/views/Login'

import Index from '@/views/Index'

import menus from '@/config/menu-config'

Vue.use(Router)

var childrenroutes = [];

var routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index,
    children: childrenroutes,
    redirect:'/Main'
  }
]

childrenroutes.push({ path: '/Main', name: '首页',   component: () => import(`@/components/Main`) });

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    sub.data.forEach((data) => {
      childrenroutes.push({
        path: `/${data.componentName}`,
        name: data.name,
        component: () => import(`@/components/${data.componentName}`)
      })
    })
  })
})

export default new Router({
  routes,
  mode: "history"    // mode 设置为history ，去掉地址栏上的 # 号
})
