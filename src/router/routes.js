import Detail from "@/views/Detail/index.vue";
import Home from "@/views/Home/index.vue";
import Search from "@/views/Search/index.vue";
import Login from "@/views/Login/index.vue";
import Register from "@/views/Register/index.vue";
import AddCartSuccess from "@/views/AddCartSuccess/index.vue";
import ShopCart from "@/views/ShopCart/index.vue";
import Trade from "@/views/Trade/index.vue";


export default [
    {
        path: "/trade",
        component: Trade,
        meta: {
            show: true
        }
    },
    {
        path: "/shopcart",
        component: ShopCart,
        meta: {
            show: true
        }
    },
    {
        path: "/addcartsuccess",
        name: "addcartsuccess",
        component: AddCartSuccess,
        meta: {
            show: true
        }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: {
            show: true
        }
    },
    {
        path: "/home",
        component: Home,
        meta: {
            show: true
        }
    },
    {
        path: "/search/:keyword?",
        component: Search,
        meta: {
            show: true
        },
        name: "search"
    },
    {
        path: "/login",
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: "/register",
        component: Register,
        meta: {
            show: false
        }
    },
    {
        path: "/",
        redirect: "/home",
        meta: {
            show: false
        }
    }
]