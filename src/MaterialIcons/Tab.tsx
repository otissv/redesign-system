import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Tab(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/>
    </Icon>
  );
}

export default Tab
    