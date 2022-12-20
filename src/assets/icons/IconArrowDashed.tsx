import * as React from 'react';
import Svg, { SvgProps, Rect, Circle, Path } from 'react-native-svg';

function IconArrowDashed(props: SvgProps) {
  return (
    <Svg width={59} height={14} fill='none' {...props}>
      <Rect x={0.5} y={6.5} width={56} height={1} rx={0.5} stroke='#A29EB6' strokeDasharray='6 6' />
      <Circle cx={4} cy={7} r={4} fill='#A29EB6' />
      <Path
        d='M56 5.268c1.333.77 1.333 2.694 0 3.464l-4.5 2.598c-1.333.77-3-.192-3-1.732V4.402c0-1.54 1.667-2.502 3-1.732L56 5.268z'
        fill='#A29EB6'
      />
    </Svg>
  );
}

export default IconArrowDashed;
