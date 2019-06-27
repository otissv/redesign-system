import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Comment(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </Icon>
  );
}

export default Comment
    