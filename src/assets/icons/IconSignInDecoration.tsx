import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function IconSignInDecoration(props: SvgProps) {
  return (
    <Svg width={34} height={33} fill='none' {...props}>
      <Path
        d='M23.5 20C29.299 20 34 15.523 34 10S29.299 0 23.5 0 13 4.477 13 10s4.701 10 10.5 10z'
        fill='#FF8A00'
      />
      <Path
        d='M16 33a3 3 0 100-6 3 3 0 000 6zM3.97 16.485a.327.327 0 01-.327-.327v-1.831a.327.327 0 01.654 0v1.831a.327.327 0 01-.327.327zM7.645 18.284h-1.83a.327.327 0 010-.654h1.83a.327.327 0 110 .654zM3.97 21.946a.327.327 0 01-.327-.327v-1.864a.327.327 0 01.654 0v1.831a.327.327 0 01-.327.36zM2.158 18.284H.327a.327.327 0 010-.654h1.831a.327.327 0 110 .654z'
        fill='#FF6A5D'
      />
    </Svg>
  );
}

export default IconSignInDecoration;
