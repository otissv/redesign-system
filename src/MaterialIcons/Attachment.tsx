import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Attachment(props: IconInterface) {
  return (
    <Icon viewBox="0 0 240 240" {...props}>
      <path
        id="path4"
        d="M 75,175 C 44.6,175 20,150.4 20,120 20,89.6 44.6,65 75,65 l 105,0 c 22.1,0 40,17.9 40,40 0,22.1 -17.9,40 -40,40 l -85,0 C 81.2,145 70,133.8 70,120 70,106.2 81.2,95 95,95 l 75,0 0,15 -75,0 c -5.5,0 -10,4.5 -10,10 0,5.5 4.5,10 10,10 l 85,0 c 13.8,0 25,-11.2 25,-25 0,-13.8 -11.2,-25 -25,-25 L 75,80 c -22.1,0 -40,17.9 -40,40 0,22.1 17.9,40 40,40 l 95,0 0,15 -95,0 z"
      />
    </Icon>
  );
}

export default Attachment;
