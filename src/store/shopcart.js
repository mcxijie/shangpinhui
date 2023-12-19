import {reqCartList, reqDeleteCartById, reqUpdateCheckedByid} from "@/api";

const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const actions = {
    async getCartList({commit}) {
        let result = await reqCartList();
        if (result.code === 200) {
            commit("GETCARTLIST", result.data);
        }
    },
    async deleteCartListBySkuId({commit}, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code === 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    },
    async updateCheckedById({commit}, {skuId, isChecked}) {
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        if (result.code === 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    }
};
const getters = {
    cartList(state) {
        return state.cartList[0] || [];
    },

};

export default {
    state,
    mutations,
    actions,
    getters
}