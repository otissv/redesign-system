import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Tag(props: IconInterface) {
  return (
    <Icon  viewBox="0 0 24 24" {...props}>
      <path d="M 22,3 7,3 C 6.31,3 5.77,3.35 5.41,3.88 L 0,12 5.41,20.11 C 5.77,20.64 6.31,21 7,21 l 15,0 c 1.1,0 2,-0.9 2,-2 L 24,5 C 24,3.9 23.1,3 22,3 Z" />
    </Icon>
  );
}

export default Tag
    