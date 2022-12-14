import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import VueSweetalert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

const base = axios.create({
  baseURL: "http://localhost:55667"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;

Vue.prototype.baseURL = "http://localhost:4000";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
