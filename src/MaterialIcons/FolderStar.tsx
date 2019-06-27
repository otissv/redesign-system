import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function FolderStar(props: IconInterface) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        id="path4"
        d="M 4 4 C 2.9 4 2.0097656 4.9 2.0097656 6 L 2 18 C 2 19.1 2.9 20 4 20 L 20 20 C 21.1 20 22 19.1 22 18 L 22 8 C 22 6.9 21.1 6 20 6 L 12 6 L 10 4 L 4 4 z M 14.953125 9.0058594 L 16.150391 11.798828 L 19.203125 12.060547 L 16.882812 14.054688 L 17.580078 17.005859 L 14.953125 15.478516 L 12.326172 17.005859 L 13.023438 14.046875 L 10.703125 12.054688 L 13.755859 11.792969 L 14.953125 9.0058594 z " />
    </Icon>
  );
}

export default FolderStar
    