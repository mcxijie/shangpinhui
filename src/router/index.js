import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Register from "@/views/Register";

Vue.use(VueRouter);

let originalPush = VueRouter.prototype.push;
let originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function push(location, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject);
    } else {
        originalPush.call(this, location, () => {
        }, () => {
        });
    }
};

VueRouter.prototype.replace = function replace(location, resolve, reject) {
    if (resolve && reject) {
        originalReplace.call(this, location, resolve, reject);
    } else {
        originalReplace.call(this, location, () => {
        }, () => {
        });
    }
};


export default new VueRouter({
    routes: [
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
})