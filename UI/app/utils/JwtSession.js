import * as SecureStore from "expo-secure-store";

export const setInStore = async (data) => {
  await SecureStore.setItemAsync(
    "accessToken",
    JSON.stringify(data.accessToken)
  );
  await SecureStore.setItemAsync("user", JSON.stringify(data.user));
};

export const removeFromStore = async () => {
  await SecureStore.deleteItemAsync("accessToken");
  await SecureStore.deleteItemAsync("user");
};

export const getTokenFromStore = async () => {
  await SecureStore.getItemAsync("accessToken");
};

export const getUserFromStore = async () => {
  await SecureStore.getItemAsync("user");
};

export const isTokenAvailableInStore = async () => {
  await SecureStore.isAvailableAsync("accessToken");
};

export const isUserAvailableInStore = async () => {
  await SecureStore.isAvailableAsync("user");
};
