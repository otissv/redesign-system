import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function TriangleUp(props: IconInterface) {
  return (
    <Icon viewBox="0 0 480 480" {...props}>
      <path d="M 240,155.4 367.8,360 112.2,360 240,155.4 M 240,80 40,400 440,400 240,80 Z" />
    </Icon>
  );
}

export default TriangleUp
    