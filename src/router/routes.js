import Detail from "@/views/Detail/index.vue";
import Home from "@/views/Home/index.vue";
import Search from "@/views/Search/index.vue";
import Login from "@/views/Login/index.vue";
import Register from "@/views/Register/index.vue";
import AddCartSuccess from "@/views/AddCartSuccess/index.vue";
import ShopCart from "@/views/ShopCart/index.vue";
import Trade from "@/views/Trade/index.vue";
import Pay from "@/views/Pay/index.vue";
import PaySuccess from "@/views/PaySuccess/index.vue";
import Center from "@/views/Center/index.vue";
import MyOrder from "@/views/Center/myOrder";
import GroupOrder from "@/views/Center/groupOrder";


export default [
    {
        path: "/center",
        component: Center,
        meta: {
            show: true
        },
        children: [
            {
                path: "myorder",
                component: MyOrder,
            },
            {
                path: "grouporder",
                component: GroupOrder,
            },
            {
                path: "/center",
                redirect: "/center/myorder"
            }
        ]
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: {
            show: true
        }
    },
    {
        path: "/pay",
        component: Pay,
        meta: {
            show: true
        }
    },
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