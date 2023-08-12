import { ApiRequest } from "../../config";

export const login = async (user) => {
  return ApiRequest()
    .post("/auth/login", user)
    .then((response) => {
      return response.data;
    });
};
