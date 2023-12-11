import axios from "axios";

export const BASE_URL = "http://192.168.0.42:8080/api";

export const ApiRequest = () => {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  return axios.create({
    baseURL: BASE_URL,
  });
};
