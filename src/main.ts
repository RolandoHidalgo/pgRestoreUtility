import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
//import {electronPluggin} from '@/electronPluggin';
//import VueElectron from 'vue-electron';
import * as electron from 'electron';
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.prototype.$electron = electron;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
