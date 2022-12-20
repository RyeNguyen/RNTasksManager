import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function IconArrow(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        d='M9.5 7l5 5-5 5'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

export default IconArrow;
