import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ChatScreen, NotificationScreen, SettingsScreen } from '../screens';
import { HomeTabParamList } from '../types/navigation.types';

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

const HomeNavigator = () => {
  return (
    <HomeTab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <HomeTab.Screen name='Home' component={HomeScreen} />
      <HomeTab.Screen name='Chat' component={ChatScreen} />
      <HomeTab.Screen name='Notification' component={NotificationScreen} />
      <HomeTab.Screen name='Settings' component={SettingsScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;
