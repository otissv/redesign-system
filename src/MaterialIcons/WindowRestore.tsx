import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function WindowRestore(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M4,8H8V4H20V16H16V20H4V8M16,8V14H18V6H10V8H16M6,12V18H14V12H6Z" />
    </Icon>
  );
}

export default WindowRestore
    