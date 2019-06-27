import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function SpaceBar(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M18 9v4H6V9H4v6h16V9z"/>
    </Icon>
  );
}

export default SpaceBar
    