import { ApiRequest } from "../../config";

export const getAllCategories = async () => {
  return ApiRequest()
    .get("/categories")
    .then((response) => {
      return response.data || [];
    });
};
