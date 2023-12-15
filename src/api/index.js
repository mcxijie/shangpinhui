import requests from "@/api/request";
import mockRequests from "@/api/mockAjax";

export const reqGetCategoryList = () => requests.get("/product/getBaseCategoryList");
export const reqGetBannerList = () => mockRequests.get("/banner");
export const reqFloorList = () => mockRequests.get("/floor");

export const reqGetSearchInfo = (params) => requests({url: "/list", method: "post", data: params});