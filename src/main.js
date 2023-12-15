import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav';
import router from '@/router';
import store from '@/store';
import '@/mock/mockServe';
import "swiper/css/swiper.css";

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav);



new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
