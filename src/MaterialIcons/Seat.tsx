import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Seat(props: IconInterface) {
  return (
    <Icon viewBox="0 0 480 480" {...props}>
      <path
         d="m 4,18 0,3 3,0 0,-3 10,0 0,3 3,0 0,-6 -16,0 z m 15,-8 3,0 0,3 -3,0 z m -17,0 3,0 0,3 -3,0 z M 17,13 7,13 7,5 C 7,3.9 7.9,3 9,3 l 6,0 c 1.1,0 2,0.9 2,2 l 0,8 z"
         transform="scale(20,20)" />
    </Icon>
  );
}

export default Seat
    