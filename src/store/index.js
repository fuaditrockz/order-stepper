import Vuex from 'vuex'
import Vue from 'vue'

import orders from './modules/orders'
import extras from './modules/extras'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    orders,
    extras
  }
})