import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { defaultButtonParamList } from '../../types/component.types';
import { colors, sizes } from '../../constants';
import { layoutStyles, textStyles } from '../../styles';

const DefaultButton: React.FC<defaultButtonParamList> = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[layoutStyles.layoutCenter, styles.button]}>
      <Text style={textStyles.h3}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: sizes.sizeSmallH,
    backgroundColor: colors.primary,
    borderRadius: sizes.sizeModerate,
  },
});
