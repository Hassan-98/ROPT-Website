import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Importing jQuery 3.4.1
window.$ = require("jquery");
// Importing Bootstrap 4.2.1 (JS)
import "bootstrap";
// Importing AOS JS
import AOS from "aos";
// SweetAlert2
window.Swal = require("sweetalert2");
// Importing Reset Styles
import "@/assets/css/reset.scss";
// Import Moment.js
window.moment = require("moment");
import VueCarousel from "vue-carousel";
import VueSocketIO from 'vue-socket.io'
 
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'localhost:2203'
}))

Vue.use(VueCarousel);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    AOS.init();
    /* eslint-disable */
    config(process.env.FIREBASE_CONFIG);
    firebase.performance();
    Vue.prototype.$messaging = firebase.messaging();
    Vue.prototype.$messaging.usePublicVapidKey(process.env.FIREBASE_PublicVapidKey);

  }
}).$mount("#app");
