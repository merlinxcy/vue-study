// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'

import news from '@/components/mmmmpage/news'
var eventHub = new Vue();
Vue.config.productionTip = false
Vue.component('news',news)

import axios from 'axios'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

import cookies from 'vue-cookies'
Vue.prototype.$cookies = cookies
/* eslint-disable no-new */

Vue.use(Vuex)


Vue.prototype.$store = store

new Vue({
  asdd:'111',
  el: '#app',
  data:{

  },
  router,
  store,
  components: { App },
  template: '<App/>'
})
