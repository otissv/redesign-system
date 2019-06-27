import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function ViewHeadline(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>
    </Icon>
  );
}

export default ViewHeadline
    