import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function ViewColumn(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/>
    </Icon>
  );
}

export default ViewColumn
    