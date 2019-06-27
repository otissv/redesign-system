import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function AlertTriangle(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
    </Icon>
  );
}

export default AlertTriangle
    