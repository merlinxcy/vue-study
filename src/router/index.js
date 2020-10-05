import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import forma from '@/components/forma'

Vue.use(Router)

export default new Router({
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
  ]
})
