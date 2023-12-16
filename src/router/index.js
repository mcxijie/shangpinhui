import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

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
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {y: 0}
    }
})