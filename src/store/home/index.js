import {reqFloorList, reqGetBannerList, reqGetCategoryList} from "@/api";

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};
const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
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
    },
    async getFloorList({commit}) {
        let result = await reqFloorList();
        if (result.code === 200) {
            commit("GETFLOORLIST", result.data);
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