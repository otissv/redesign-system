import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function ViewCompact(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"/>
    </Icon>
  );
}

export default ViewCompact
    