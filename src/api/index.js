import requests from "@/api/ajax";
import mockRequests from "@/api/mockAjax";

export const reqGetCategoryList = () => requests.get("/product/getBaseCategoryList");
export const reqGetBannerList = () => mockRequests.get("/banner");
export const reqFloorList = () => mockRequests.get("/floor");
export const reqGetSearchInfo = (params) => requests({url: "/list", method: "post", data: params});
export const reqGoodsInfo = (skuId) => requests({url: `/item/${skuId}`, method: "get"});
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post"
});
export const reqCartList = () => requests({url: "/cart/cartList", method: "get"});