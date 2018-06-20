// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Direactive from '@/common/directive'
import store from '@/store/index'
import Filter from '@/common/filter'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Element)
Vue.use(Direactive)
Vue.use(Filter)
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
