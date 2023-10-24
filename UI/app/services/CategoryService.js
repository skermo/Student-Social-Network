import { ApiRequest } from "../../config";

export const getAllCategories = async (user) => {
  return ApiRequest()
    .get("/categories")
    .then((response) => {
      return response.data;
    });
};
