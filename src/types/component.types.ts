import React from 'react';

export type IconButtonParamList = {
  children: React.ReactNode;
  buttonColor?: string;
  onPress?: Function;
};

export type InputFieldParamList = {
  inputLabel?: string;
  inputPlaceholder: string;
  isSearched: boolean;
  hasFilter: boolean;
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
