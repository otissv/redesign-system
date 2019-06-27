import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Home(props: IconInterface) {
  return (
    <Icon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </Icon>
  );
}

export default Home
    