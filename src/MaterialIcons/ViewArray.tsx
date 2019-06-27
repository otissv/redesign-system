import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function ViewArray(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"/>
    </Icon>
  );
}

export default ViewArray
    