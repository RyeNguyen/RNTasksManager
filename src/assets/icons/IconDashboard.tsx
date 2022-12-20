import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function IconDashboard(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        d='M3.678 9.38h16.644M12 9.9v10.922M3.353 15.55a13.354 13.354 0 010-6.1A7.511 7.511 0 018.95 3.853c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 015.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 01-5.597-5.597z'
        stroke='#fff'
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default IconDashboard;
