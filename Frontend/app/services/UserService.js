import { ApiRequest } from "../../config";

export const login = async (user) => {
  return ApiRequest()
    .post("/auth/login", user)
    .then((response) => {
      return response.data;
    });
};

export const getUserById = async (id) => {
  return ApiRequest()
    .get(`/auth/${id}`)
    .then((response) => {
      return response.data;
    });
};
