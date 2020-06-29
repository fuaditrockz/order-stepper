import Vuex from 'vuex'
import Vue from 'vue'

import summary from './modules/summary'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    summary
  }
})