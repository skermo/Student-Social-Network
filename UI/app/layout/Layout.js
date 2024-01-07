import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { crimson, raisin } from "../../assets/styles/variables";
import Tabs from "../components/Tabs";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";
import NewPost from "../pages/NewPost";
import Post from "../pages/Post";

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
        {auth?.user ? (
          <Stack.Screen
            name="Tabs"
            component={Tabs}
          ></Stack.Screen>
        ) : (
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
        )}
        <Stack.Screen
          name="NewPost"
          component={NewPost}
          options={{
            headerShown: true,
            headerTitle: "Novi Post",
            headerStyle: { backgroundColor: raisin },
            headerTitleStyle: { color: "white" },
            headerTintColor: crimson,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Post"
          component={Post}
          options={{
            headerShown: true,
            headerTitle: "Post",
            headerStyle: { backgroundColor: raisin },
            headerTitleStyle: { color: "white" },
            headerTintColor: crimson,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
