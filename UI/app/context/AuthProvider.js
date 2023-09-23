// import { createContext, useEffect, useState } from "react";
// import { login } from "../services/UserService";
// import {
//   getTokenFromStore,
//   getUserFromStore,
//   removeFromStore,
//   setInStore,
// } from "../utils/JwtSession";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({ user: null, accessToken: null });
//   const [loading, setLoading] = useState(true);

//   const loginUser = async (user) => {
//     setLoading(true);
//     const data = await login(user);
//     setInStore(data.user, data.accessToken);
//     setAuth({
//       user: data.user,
//       accessToken: data.accessToken,
//       authenticated: true,
//     });
//     setLoading(false);
//   };

//   const logoutUser = async () => {
//     setLoading(true);
//     removeFromStore();
//     setAuth({
//       user: null,
//       accessToken: null,
//       authenticated: false,
//     });
//     console.log("console.log(auth);");
//     console.log(auth);
//     setLoading(false);
//   };

//   useEffect(() => {
//     const proba = async () => {
//       console.log("getUserFromStore");
//       console.log(getUserFromStore());
//       setLoading(true);
//       if (getUserFromStore()) {
//         setAuth({
//           user: getUserFromStore(),
//           accessToken: getTokenFromStore(),
//           authenticated: true,
//         });
//       }
//       setLoading(false);
//     };
//     proba();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         auth,
//         setAuth,
//         loginUser,
//         logoutUser,
//         loading,
//         setLoading,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

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

  // const login = async (user) => {
  //   console.log(user);
  //   try {
  //     const result = await axios.post(`${BASE_URL}/auth/login`, {
  //       email: user.email,
  //       password: user.password,
  //     });
  //     setAuth({
  //       user: result.user,
  //       accessToken: result.accessToken,
  //       authenticated: true,
  //     });
  //     axios.defaults.headers.common[
  //       "Authorization"
  //     ] = `Bearer ${result.accessToken}`;

  //     // await SecureStore.setItemAsync("user", JSON.stringify(result.user));
  //     // await SecureStore.setItemAsync(
  //     //   "accessToken",
  //     //   JSON.stringify(result.accessToken)
  //     // );
  //     return result;
  //   } catch (e) {
  //     console.log(e);
  //     return { error: true, msg: e.response };
  //   }
  // };

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
