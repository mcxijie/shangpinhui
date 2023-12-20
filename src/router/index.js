import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";

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


let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {y: 0}
    }
});

router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        if (to.path === "/login" || to.path === "/register") {
            next("/");
        } else {
            if (name) {
                next();
            } else {
                try {
                    await store.dispatch("getUserInfo");
                    next();
                } catch (error) {
                    await store.dispatch("userLogout");
                    next("/login");
                }
            }
        }
    } else {
        next();
    }
});

export default router;