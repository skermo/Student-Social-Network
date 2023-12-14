import { ApiRequest } from "../../config";

export const getCollegeById = async (id) => {
  return ApiRequest()
    .get(`/colleges/${id}`)
    .then((response) => {
      return response.data;
    });
};

export const getCollegesByUniversityId = async (universityId) => {
  return ApiRequest()
    .get(`/colleges/university/${universityId}`)
    .then((response) => {
      return response.data || [];
    });
};
