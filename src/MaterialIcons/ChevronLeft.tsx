import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function ChevronLeft(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </Icon>
  );
}

export default ChevronLeft
    