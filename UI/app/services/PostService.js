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

export const searchPosts = async (
  pageNo = 0,
  name = "",
  category = "",
  university = "",
  college = "",
  sortBy = "createdOn",
  sortDir = "desc"
) => {
  return (
    ApiRequest().get(
      `posts/search?pageNo=${pageNo}&pageSize=8&name=${name}&category=${category}&university=${university}&college=${college}&sortBy=${sortBy}&sortDir=${sortDir}`
    ) || []
  );
};

export const getPostById = async (id) => {
  return ApiRequest().get(`posts/${id}`) || [];
};
