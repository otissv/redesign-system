import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Book(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </Icon>
  );
}

export default Book
    