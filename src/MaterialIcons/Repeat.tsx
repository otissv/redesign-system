import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Repeat(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
    </Icon>
  );
}

export default Repeat
    