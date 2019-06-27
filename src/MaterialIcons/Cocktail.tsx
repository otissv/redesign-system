import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Cocktail(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M11 13v6H6v2h12v-2h-5v-6l8-8V3H3v2l8 8zM7.5 7l-2-2h13l-2 2h-9z"/>
    </Icon>
  );
}

export default Cocktail
    