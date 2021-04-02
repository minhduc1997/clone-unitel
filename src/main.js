import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './boostrap.js'
import axios from 'axios';
import './helper.js'

window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
};

// router.beforeEach(async (to, from, next) => {
//   var data = to.matched.some((record) => record.meta.requiresAuth)
//   if (data){
//     next('/login');
//   } else next();
// });

Vue.prototype.$axios = axios;
//Use the window object to make it available globally.

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')