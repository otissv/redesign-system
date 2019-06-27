import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Forward(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M12 8V4l8 8-8 8v-4H4V8z"/>
    </Icon>
  );
}

export default Forward
    