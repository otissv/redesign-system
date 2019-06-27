import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function CropSquare(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"/>
    </Icon>
  );
}

export default CropSquare
    