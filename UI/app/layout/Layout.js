import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Stack = createNativeStackNavigator();

const Layout = () => {
  const { auth, logout } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth?.user ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => <Button onPress={logout} title="Logout" />,
            }}
          ></Stack.Screen>
        ) : (
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
