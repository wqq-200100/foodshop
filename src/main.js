import App from './App.vue'
import Vue from "vue";
import router from  './router'

new Vue({
    render: h => h(App),
    router
}).$mount("#app");
