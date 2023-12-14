import { ApiRequest } from "../../config";

export const getAllUniversities = async () => {
  return ApiRequest()
    .get("/universities")
    .then((response) => {
      return response.data || [];
    });
};
