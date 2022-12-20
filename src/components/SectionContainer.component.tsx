import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { layoutStyles, textStyles } from '../styles';
import { sizes } from '../constants';
import { IconArrow } from '../assets/icons';
import { SectionContainerParamList } from '../types/component.types';

const SectionContainer: React.FC<SectionContainerParamList> = ({
  hasArrow = false,
  sectionName,
  sectionIcon,
  children,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={[layoutStyles.layoutStretch, styles.sectionHeader]}>
        <View style={styles.sectionHeading}>
          {sectionIcon}
          <Text style={[textStyles.h3, styles.sectionHeadingText]}>{sectionName}</Text>
        </View>

        {hasArrow && (
          <TouchableOpacity>
            <IconArrow />
          </TouchableOpacity>
        )}
      </View>

      {children}
    </View>
  );
};

export default SectionContainer;

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: sizes.sizeSmallerH,
  },
  sectionHeader: {
    marginBottom: sizes.sizeModerateH,
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeadingText: {
    marginLeft: sizes.sizeSmaller,
  },
});
