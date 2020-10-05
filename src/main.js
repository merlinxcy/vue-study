// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import news from '@/components/mmmmpage/news'
Vue.config.productionTip = false
Vue.component('news',news)
/* eslint-disable no-new */
new Vue({
  asdd:'111',
  el: '#app',
  data:{

  },
  router,
  components: { App },
  template: '<App/>'
})
