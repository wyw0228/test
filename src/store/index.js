import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/system'
import user from './modules/user'
import market from './modules/market'
Vue.use(Vuex)


export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    system,
    user,
    market
  },
  strict: true
})
