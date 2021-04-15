import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import AOS from 'aos';

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
