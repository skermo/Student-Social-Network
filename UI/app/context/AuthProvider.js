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
    authenticated: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      const accessToken = await SecureStore.getItemAsync("accessToken");
      const user = await SecureStore.getItemAsync("user");
      if (accessToken && user) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        setAuth({
          user: user,
          accessToken: accessToken,
          authenticated: true,
        });
      }
    };
    load();
  }, []);

  const loginUser = async (user) => {
    setLoading(true);
    const data = await login(user);
    setInStore(data);
    setAuth({
      user: data.user,
      accessToken: data.accessToken,
      authenticated: true,
    });
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.accessToken}`;
    setLoading(false);
  };

  const logoutUser = async () => {
    removeFromStore();
    axios.defaults.headers.common["Authorization"] = "";

    setAuth({
      user: null,
      accessToken: null,
      authenticated: false,
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
