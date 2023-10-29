import { ApiRequest } from "../../config";

export const getCollegeById = async (id) => {
  return ApiRequest()
    .get(`/collages/${id}`)
    .then((response) => {
      return response.data;
    });
};
