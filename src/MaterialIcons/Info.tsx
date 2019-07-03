import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Info(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </Icon>
  );
}

export default Info
    