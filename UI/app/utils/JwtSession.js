import * as SecureStore from "expo-secure-store";

export const setInStore = async (user, token) => {
  await SecureStore.setItemAsync("token", token);
  await SecureStore.setItemAsync("user", user);
};

export const removeFromStore = async () => {
  await SecureStore.removeFromStore("token");
  await SecureStore.removeFromStore("user");
};

export const getTokenFromStore = async () => {
  await SecureStore.getItemAsync("token");
};

export const getUserFromStore = async () => {
  await SecureStore.getItemAsync("user");
};

export const isTokenAvailableInStore = async () => {
  await SecureStore.isAvailableAsync("token");
};

export const isUserAvailableInStore = async () => {
  await SecureStore.isAvailableAsync("user");
};
