import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function SortAsc(props: IconInterface) {
  return (
    <Icon viewBox="0 0 240 240" {...props}>
      <g transform="matrix(1.15,0,0,1.15,-18,-18)">
         <path d="M 150,50 90,50 120,20 Z"/>
         <path d="m 90,190 60,0 -30,30 z"/>
         <path d="m 63.53247,134.31064 16.4252,-45.200689 16.4252,45.200689 -32.8504,0 z M 73.09972,70 35,170 l 15.57856,0 7.78926,-21.3787 43.26436,0 L 109.42144,170 125,170 86.98495,70 73.09972,70 Z"/>
         <path d="m 151.18991,156.11354 53.81009,0 0,13.88646 -75,0 0,-11.26636 52.05157,-74.759839 -51.69986,0 0,-13.973801 72.9777,0 0,11.004369 -52.1395,75.109171 z"/>
      </g>
    </Icon>
  );
}

export default SortAsc
    