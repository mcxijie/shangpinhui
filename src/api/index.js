import requests from "@/api/request";
import mockRequests from "@/api/mockAjax";

export const reqGetCategoryList = () => requests.get("/product/getBaseCategoryList");
export const reqGetBannerList = () => mockRequests.get("/banner");