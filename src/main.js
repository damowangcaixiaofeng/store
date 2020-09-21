import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import toast from "components/common/toast.js"
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(toast)
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
