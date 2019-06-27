import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function NetworkAlert(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"/>
    </Icon>
  );
}

export default NetworkAlert
    