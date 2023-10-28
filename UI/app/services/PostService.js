import { ApiRequest } from "../../config";

export const addNewPost = (post) => {
  return ApiRequest()
    .post(`posts`, post)
    .then((response) => {
      return response.data;
    });
};
