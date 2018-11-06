import Vue from 'vue'
import 'amfe-flexible'
import App from '@/App.vue'
import router from '@/router/'
import store from '@/store/'

import wechatApi from '@/utils/wechatApi'

Vue.config.productionTip = false

// vant
import {Area,Toast,Card,Popup,Lazyload} from 'vant'

Vue.use(Area)
Vue.use(Card)
Vue.use(Toast)
Vue.use(Popup)
Vue.use(Popup)
Vue.use(Lazyload,{
  loading: "https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg",
  preLoad: 1.3

})

// globle
wechatApi.init()

window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
