import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

const scaleSizeUI = (param: number, isHeight?: boolean | undefined) => {
  const widthDesign = 375;

  const heightDesign = 812;

  return isHeight ? (param * height) / heightDesign : (param * width) / widthDesign;
};

export default scaleSizeUI;
