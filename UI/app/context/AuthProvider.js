import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { createContext, useEffect, useState } from "react";
import { login } from "../services/UserService";
import { removeFromStore, setInStore } from "../utils/JwtSession";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    accessToken: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const load = async () => {
      const accessToken = await SecureStore.getItemAsync("accessToken");
      const user = await SecureStore.getItemAsync("user");
      if (accessToken && user) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken.replace(/^"(.*)"$/, "$1")}`;
        setAuth({
          user: JSON.parse(user),
          accessToken: accessToken,
        });
      }
    };
    load();
    setLoading(false);
  }, []);

  const loginUser = async (user) => {
    setLoading(true);
    const data = await login(user);
    setInStore(data);
    setAuth(data);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.accessToken.replace(/^"(.*)"$/, "$1")}`;
    setLoading(false);
  };

  const logoutUser = async () => {
    removeFromStore();
    axios.defaults.headers.common["Authorization"] = "";

    setAuth({
      user: null,
      accessToken: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{ loginUser, logoutUser, auth, setAuth, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
