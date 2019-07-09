import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import plugins from './plugins';
import './utils/routerControl';

Vue.config.productionTip = false;

Vue.use(plugins);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
