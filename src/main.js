import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import { store } from './store/store'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
    render: h => h(App),
    store
}).$mount('#app')