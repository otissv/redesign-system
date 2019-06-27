import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Bookmark(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
    </Icon>
  );
}

export default Bookmark
    