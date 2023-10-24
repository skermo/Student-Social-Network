import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import Tabs from "../components/Tabs";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";
import NewPost from "../pages/NewPost";

const Stack = createNativeStackNavigator();

const Layout = () => {
  const { auth, logoutUser } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      >
        {auth?.authenticated ? (
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerRight: () => <Button onPress={logoutUser} title="Logout" />
            }}
          ></Stack.Screen>
        ) : (
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
        )}
        <Stack.Screen name="NewPost" component={NewPost} options={{headerShown: true, headerTitle: "Novi Post"}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
