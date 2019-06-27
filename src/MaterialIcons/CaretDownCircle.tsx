import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function CaretDownCircle(props: IconInterface) {
  return (
    <Icon viewBox="0 0 480 480" {...props}>
      <path
        d="M 240,40 C 129.6,40 40,129.6 40,240 40,350.4 129.6,440 240,440 350.4,440 440,350.4 440,240 440,129.6 350.4,40 240,40 Z m -100,160 200,0 -100,100 z"
        id="path4"
      />
    </Icon>
  );
}

export default CaretDownCircle;
