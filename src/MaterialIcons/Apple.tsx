import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Apple(props: IconInterface) {
  return (
    <Icon viewBox="0 0 480 480" {...props}>
      <g transform="matrix(1.25,0,0,-1.25,0,480)">
        <path d="m 321.03315,244.2368 c -22.53228,-6.9888 -37.27546,-38.6688 -37.27546,-61.696 0,-29.6128 16.79563,-61.28 44.24231,-68.6912 -7.78272,-26.3232 -28.67687,-59.2256 -47.92652,-73.216 -8.19066,-5.76 -18.01945,-8.224 -29.49274,-8.224 -7.78272,0 -16.3877,1.6448 -27.85462,6.1696 -9.42723,4.5248 -18.02582,6.5856 -23.7561,6.5856 -4.91439,0 -15.56544,-3.2896 -29.90706,-9.0496 C 160.86593,33.6448 154.3134,32 149.80695,32 c -13.10506,0 -24.57835,5.344 -36.45321,15.2192 -36.459593,33.728 -57.353742,83.0848 -57.353742,134.496 0,51.0016 32.361072,99.9488 81.109832,99.9488 14.74319,0 25.80217,-3.2896 35.63733,-8.224 9.42085,-5.76 17.20357,-7.8144 25.80855,-7.8144 6.96684,0 15.1575,1.2352 22.94022,4.5248 18.8417,7.3984 31.53882,11.52 38.9136,11.52 18.8417,0 33.59126,-6.1696 45.88044,-17.28 4.91439,-4.9344 10.23673,-11.52 14.74318,-20.16 z m -130.67448,35.3728 c 0,17.6832 6.96047,32.9024 18.84171,47.712 12.29555,13.5744 28.26893,21.7984 45.88044,24.6784 0,-18.0928 -6.15096,-36.1984 -18.43377,-50.592 -13.51936,-14.8032 -28.26893,-21.7984 -46.28838,-21.7984 z"/>
      </g>
    </Icon>
  );
}

export default Apple
    