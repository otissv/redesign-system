import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Delicious(props: IconInterface) {
  return (
    <Icon viewBox="0 0 480 480" {...props}>
      <g transform="matrix(1.25,0,0,-1.25,0,480)">
        <path d="m 352,192 -160,0 0,-160 -159.999999,0 0,160 L 192,192 l 0,160 160,0 0,-160 z"/>
       </g>
    </Icon>
  );
}

export default Delicious
    