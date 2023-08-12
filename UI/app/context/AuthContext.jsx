import { createContext, useState } from "react";
import { login } from "../services/UserService";
import { removeFromStore, setInStore } from "../utils/JwtSession";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const loginUser = async (user) => {
    const data = await login(user);
    setInStore(data.user, data.accessToken);
    return data;
  };

  const logoutUser = async () => {
    removeFromStore;
    setAuth("");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
