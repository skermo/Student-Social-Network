import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../pages/Home';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{headerShown: false, headerShadowVisible: false}} />
      <Tab.Screen name='Search' component={Search} options={{headerShown: false, headerShadowVisible: false}} />
    </Tab.Navigator>
  )
}

export default Tabs