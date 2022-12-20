import { NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';

export type RootStackParamList = {
  SignIn: React.FC;
  HomeNavigator: NavigatorScreenParams<HomeTabParamList>;
};

export type HomeTabParamList = {
  Home: undefined;
  Chat: undefined;
  Notification: undefined;
  Settings: undefined;
};
