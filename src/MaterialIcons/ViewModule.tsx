import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function ViewModule(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
    </Icon>
  );
}

export default ViewModule
    