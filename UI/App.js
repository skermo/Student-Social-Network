import { useEffect } from "react";
import { AuthProvider } from "./app/context/AuthContext";
import useAuth from "./app/hooks/useAuth";
import Layout from "./app/layout/Layout";
import { getTokenFromStore, getUserFromStore } from "./app/utils/JwtSession";

export default function App() {
  const { setAuth } = useAuth();

  useEffect(() => {
    if (getUserFromStore() != null) {
      setAuth({
        user: getUserFromStore(),
        accessToken: getTokenFromStore(),
      });
    }
  });

  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}
