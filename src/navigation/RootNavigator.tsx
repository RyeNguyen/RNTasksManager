import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import { SignInScreen } from '../screens';
import { RootStackParamList } from '../types/navigation.types';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
      <RootStack.Screen name='SignIn' component={SignInScreen} />
      <RootStack.Screen name='HomeNavigator' component={HomeNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
