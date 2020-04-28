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
    path: '*',
    name: '404',
    component: () => import('@/components/404')
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index,
    redirect: '/Main',
    children: childrenroutes
  }
]

childrenroutes.push({ path: '/Main', name: '首页', component: () => import(`@/views/Example/Main`) });

menus.forEach((item) => {
  if (item.level) {
    item.sub.forEach((sub) => {
      sub.data.forEach((data) => {
        childrenroutes.push({
          path: `/${data.componentName}`,
          name: data.name,
          component: () => import(`@/views/Example/${data.componentName}`),
          meta: data.meta,
        })
      })
    })
  }
  else {
    item.data.forEach((data) => {
      childrenroutes.push({
        path: `/${data.componentName}/`,
        name: data.name,
        component: () => import(`@/views/Example/${data.componentName}`),
        meta:data.meta,
      })
    })
  }
})
export default new Router({
  routes,
  mode: "history"    // mode 设置为history ，去掉地址栏上的 # 号
})
