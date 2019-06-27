import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function CropPortrait(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"/>
    </Icon>
  );
}

export default CropPortrait
    