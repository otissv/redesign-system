import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Circle(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
    </Icon>
  );
}

export default Circle
    