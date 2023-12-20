import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav';
import router from '@/router';
import store from '@/store';
import '@/mock/mockServe';
import "swiper/css/swiper.css";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
import * as API from '@/api';

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);


new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$API = API;
    },
    router,
    store
}).$mount('#app')
