import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import {store} from './store'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  template: '<App :user="user" ></App>',
  render: h => h(App),
  updated(){
    store.dispatch('getLoginStatus')
  },
  created(){
    // this.initFirebase()
    // store.dispatch('getLoginStatus')
  }
}).$mount('#app')