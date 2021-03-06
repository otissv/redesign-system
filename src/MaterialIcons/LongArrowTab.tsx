import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function LongArrowTab(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"/>
    </Icon>
  );
}

export default LongArrowTab
    