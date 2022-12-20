import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { layoutStyles, textStyles } from '../styles';
import { colors, sizes } from '../constants';
import { TabItemType, TabsSystemParamList } from '../types/component.types';

const TabsSystemComponent: React.FC<TabsSystemParamList> = ({
  tabItems,
  currentTab,
  onSelectTab,
}) => {
  return (
    <View style={[tabItems.length === 3 ? layoutStyles.layoutStretch : null, styles.tabs]}>
      {tabItems.map((item: TabItemType) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.tabItem,
            currentTab === item.id ? styles.tabItemActive : null,
            tabItems.length !== 3 ? styles.tabItemHasMargin : null,
          ]}
          onPress={() => onSelectTab(item.id)}
        >
          <Text style={[textStyles.h3, currentTab === item.id ? null : textStyles.textGrey]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabsSystemComponent;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.sizeBigH,
  },
  tabItem: {
    borderRadius: sizes.sizeSmall,
    paddingVertical: sizes.sizeSmallerH,
    paddingHorizontal: sizes.sizeModerate,
  },
  tabItemActive: {
    backgroundColor: colors.primary,
  },
  tabItemHasMargin: {
    marginRight: sizes.sizeModerate,
  },
});
