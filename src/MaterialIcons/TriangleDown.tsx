import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function TriangleDown(props: IconInterface) {
  return (
    <Icon viewBox="0 0 480 480" {...props}>
      <path d="M 240,346.6 112.2,142 367.8,142 240,346.6 m 0,75.4 200,-320 -400,0 200,320 z" />
    </Icon>
  );
}

export default TriangleDown
    