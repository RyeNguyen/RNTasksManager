import { StyleSheet } from 'react-native';
import { sizes, colors } from '../constants';

const textStyles = StyleSheet.create({
  h1: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: sizes.textSizeLarge,
    color: colors.white,
  },
  h2: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: sizes.textSizeBig,
    color: colors.white,
  },
  h3: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: sizes.textSizeModerate,
    color: colors.white,
  },
  textMain: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: sizes.textSizeSmall,
    color: colors.white,
  },
  textSmall: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: sizes.textSizeTiny,
    color: colors.white,
  },
  textGrey: {
    color: colors.grey,
  },
  textPurple: {
    color: colors.primary,
  },
  textOrange: {
    color: colors.secondary,
  },
  textRed: {
    color: colors.red,
  },
});

export default textStyles;
