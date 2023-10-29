import { ApiRequest } from "../../config";

export const addNewPost = (post) => {
  return ApiRequest()
    .post(`posts`, post)
    .then((response) => {
      return response.data;
    });
};

export const getPosts = async (pageNo = 0) => {
  return (
    ApiRequest().get(
      `posts?pageNo=${pageNo}&pageSize=8&sortBy=createdOn&sortDir=desc`
    ) || []
  );
};
