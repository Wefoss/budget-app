import Vue from 'vue'
import App from './App.vue'
import './plugins/elements'
import store from './vuex/store'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store
}).$mount('#app')

