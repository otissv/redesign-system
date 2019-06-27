import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function SortAmountAsc(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M 3,6 9,6 9,8 3,8 3,6 Z m 0,12 0,-2 18,0 0,2 -18,0 z m 0,-7 12,0 0,2 -12,0 0,-2 z" />
    </Icon>
  );
}

export default SortAmountAsc
    