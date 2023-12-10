import { ApiRequest } from "../../config";

export const addNewPost = async (post) => {
  const response = await ApiRequest().post(`posts`, post);
  return response.data;
};

export const getPosts = async (pageNo = 0) => {
  return (
    ApiRequest().get(
      `posts?pageNo=${pageNo}&pageSize=8&sortBy=createdOn&sortDir=desc`
    ) || []
  );
};

export const likePost = async (likeRequest) => {
  const response = await ApiRequest().post(`posts/like`, likeRequest);
  return response.data;
};

export const commentPost = async (commentRequest) => {
  const response = await ApiRequest().post(`posts/comment`, commentRequest);
  return response.data;
};
