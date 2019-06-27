import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function FlightTakeoff(props: IconInterface) {
  return (
    <Icon viewBox="0 0 240 240" {...props}>
      <path
         transform="matrix(10.000015,0,0,10.000015,0.19996979,-2.8501843)"
         d="m 2.5,19 19,0 0,2 -19,0 z M 22.07,9.64 C 21.86,8.84 21.03,8.36 20.23,8.58 L 14.92,10 8.02,3.57 6.09,4.08 l 4.14,7.17 -4.97,1.33 -1.97,-1.54 -1.45,0.39 1.82,3.16 0.77,1.33 1.6,-0.43 5.31,-1.42 4.35,-1.16 5.31,-1.42 c 0.81,-0.23 1.28,-1.05 1.07,-1.85 z" />
    </Icon>
  );
}

export default FlightTakeoff
    