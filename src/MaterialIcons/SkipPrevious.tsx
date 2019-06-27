import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function SkipPrevious(props: IconInterface) {
  return (
    <Icon viewBox="0 0 500 500" {...props}>
      <path d="m 125,125 41.66667,0 0,250 L 125,375 Z M 197.91666,250 375,375 375,125 Z" />
    </Icon>
  );
}

export default SkipPrevious
    