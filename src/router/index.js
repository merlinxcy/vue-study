import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import forma from '@/components/forma'
import prop2 from '@/components/propstest/prop2'
import store from '../store'
Vue.use(Router)
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ()=> import('../App')
    },
    {
      path: '/1',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/2',
      name: 'Index',
      component: Home
    },
    {
      path: '/3',
      name: 'Forma',
      component: forma
    },
    {
      path: '/4',
      name: 'nnn1',
      component: ()=> import('../views/About')
    },
    {
      path: '/5',
      name: 'nnn2',
      component: ()=> import('../views/getstart')
    },
    {
      path: '/6',
      name: 'nnn3',
      component: ()=> import('../views/demo')
    },
    {
      path: '/7',
      name: 'nnn4',
      component: ()=> import('../views/multipage')
    },
    {
      path: '/8',
      name: 'nnn5',
      component: ()=> import('../views/parentPage')
    },
    {
      path: '/9',
      name: 'nnn6',
      component: ()=> import('../views/propTest')
    },
    {
      path: '/10',
      name: 'nnn7',
      component: prop2
    },
    {
      path: '/11',
      name: 'nnn7',
      component: ()=> import('../views/prop_all_demo')
    },
    {
      path: '/12',
      name: 'nnn8',
      component: ()=> import('../views/slot1show')
    },
    {
      path: '/13',
      name: 'nnn9',
      component: ()=> import('../views/childrenss')
    },
    {
      path: '/14',
      name: 'axios',
      component: ()=> import('../views/axioin')
    },
  ]
})

router.beforeEach((to, from, next)=>{
  const token = store.state.token
  console.log(token)
  next()
  // if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
  //   if (token) { // 通过vuex state获取当前的token是否存在
  //     next()
  //   } else {
  //     console.log('该页面需要登陆')
  //     next({
  //       path: '/login'
  //       // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //     })
  //   }
  // } else {
  //   next()
  // }
})

export default router
