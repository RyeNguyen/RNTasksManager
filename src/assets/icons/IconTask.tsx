import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function IconTask(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        d='M7.319 9.4l1.04 1.04 2.08-2.08m2.601 1.56h3.641M7.32 14.6l1.04 1.041 2.08-2.08m2.601 1.56h3.641M3.353 15.05a13.354 13.354 0 010-6.1A7.511 7.511 0 018.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 015.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 01-5.597-5.597z'
        stroke='#FF8A00'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

export default IconTask;
