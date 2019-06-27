import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function FlightLand(props: IconInterface) {
  return (
    <Icon viewBox="0 0 240 240" {...props}>
      <path
         transform="matrix(10,0,0,10,0,5)"
         d="m 2.5,19 19,0 0,2 -19,0 z m 7.18,-5.73 4.35,1.16 5.31,1.42 c 0.8,0.21 1.62,-0.26 1.84,-1.06 0.21,-0.8 -0.26,-1.62 -1.06,-1.84 L 14.81,11.53 12.05,2.51 10.12,2 l 0,8.28 L 5.15,8.95 4.22,6.63 2.77,6.24 l 0,5.17 1.6,0.43 5.31,1.43 z" />
    </Icon>
  );
}

export default FlightLand
    