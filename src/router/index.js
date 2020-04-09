
import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'

import Index from '@/views/Index'

import menus from '@/config/menu-config'

Vue.use(Router)

var routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index
  }
]

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    sub.data.forEach((data) => {
      routes.push({
        path: `/${data.componentName}`,
        name: data.componentName,
        component: () => import(`@/components/${data.componentName}`)
      })
    })
  })
})

export default new Router({ routes })

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/Index',
//       name: 'Index',
//       component: Index
//     }
//   ]
// })