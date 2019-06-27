import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function ViewCarousel(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/>
    </Icon>
  );
}

export default ViewCarousel
    