import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Account from "../pages/Account";
import Home from "../pages/Home";
import Search from "../pages/Search";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { crimson, slate } from "../../assets/styles/variables";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: crimson,
        tabBarStyle: {
          backgroundColor: slate,
          paddingTop: 7,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderLeftWidth: 0.2,
          borderRightWidth: 0.2,
          position: 'absolute',
          overflow: 'hidden',
},
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
