import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { IconButtonParamList } from '../../types/component.types';
import { colors, sizes } from '../../constants';
import { layoutStyles } from '../../styles';
import { scaleSizeUI } from '../../utils';

const IconButtonComponent: React.FC<IconButtonParamList> = ({
  children,
  buttonColor = colors.secondary,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[layoutStyles.layoutCenter, styles.button, { backgroundColor: buttonColor }]}
      onPress={() => onPress()}
    >
      {children}
    </TouchableOpacity>
  );
};

export default IconButtonComponent;

const styles = StyleSheet.create({
  button: {
    width: scaleSizeUI(44),
    height: scaleSizeUI(44),
    borderRadius: sizes.sizeSmall,
  },
});
