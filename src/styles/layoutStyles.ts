import { StyleSheet } from 'react-native';
import { colors } from '../constants';

const layoutStyles = StyleSheet.create({
  layoutCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layoutStretch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  layoutScreen: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.background,
  },
});

export default layoutStyles;
