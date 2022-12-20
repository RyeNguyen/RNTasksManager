import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function Icon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path d='M7 12h10m-5-5v10' stroke='#fff' strokeWidth={2} strokeLinecap='round' />
    </Svg>
  );
}

export default Icon;
