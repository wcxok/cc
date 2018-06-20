import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import tmp from './modules/tmp'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    tmp,
    app
  }
})
