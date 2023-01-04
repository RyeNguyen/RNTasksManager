import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { FieldError } from 'react-hook-form';

export type IconButtonParamList = {
  children: React.ReactNode;
  buttonColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export type defaultButtonParamList = {
  buttonText: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export type InputFieldParamList = {
  inputLabel?: string;
  inputPreIcon?: React.ReactNode;
  inputPostIcon?: React.ReactNode;
  inputPlaceholder: string;
  secureText?: boolean;
  onIconTap?: () => void;
  onChange?: (text: string) => void;
  value?: string;
  error?: FieldError;
};

export interface TabItemType {
  id: number;
  name: string;
}

export type TabsSystemParamList = {
  tabItems: Array<TabItemType>;
  currentTab: number;
  onSelectTab: Function;
};

export type SectionContainerParamList = {
  hasArrow?: boolean;
  sectionName: string;
  sectionIcon: React.ReactNode;
  children: React.ReactNode;
};

export type KeyboardAvoiderParamList = {
  children: React.ReactNode;
};
