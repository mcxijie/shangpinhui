import {reqGetBannerList, reqGetCategoryList} from "@/api";

const state = {
    categoryList: [],
    bannerList: []
};
const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    }
};
const actions = {
    async getCateGoryList({commit}) {
        let result = await reqGetCategoryList();
        if (result.code === 200) {
            commit("GETCATEGORYLIST", result.data);
        }
    },
    async getBannerList({commit}) {
        let result = await reqGetBannerList();
        if (result.code === 200) {
            commit("GETBANNERLIST", result.data);
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
};