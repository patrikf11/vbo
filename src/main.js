import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store/store.js'
import UniqueId from 'vue-unique-id'
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(UniqueId);
new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
