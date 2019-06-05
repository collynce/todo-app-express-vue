import Vue from 'vue'
import App from './App.vue'
//import 'bulma/css/bulma.css';
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(axios)
Vue.use(Vuetify)
Vue.use(colors)
Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
