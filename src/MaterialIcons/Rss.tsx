import React from 'react';
import { Icon, IconInterface } from '../Icon';

export function Rss(props: IconInterface) {
  return (
    <Icon viewBox="0 0 60 60"  {...props}>
      <g transform="matrix(1.25,0,0,-1.25,0,60)">        
        <path d="M 12.400001,16.8 C 9.9800006,16.8 8,14.819999 8,12.399999 8,9.9800001 9.9800006,8 12.400001,8 14.820001,8 16.8,9.9800001 16.8,12.399999 16.8,14.819999 14.820001,16.8 12.400001,16.8 Z" />
        <path d="m 8,28.334842 0,-5.809955 c 8.017737,0 14.524887,-6.50715 14.524887,-14.524887 l 5.809954,0 C 28.334841,19.242263 19.242263,28.334842 8,28.334842 Z"/>
        <path d="M 8,40.000002 8,34.181819 C 22.458181,34.181819 34.181819,22.458182 34.181819,8 L 40,8 C 40,25.687274 25.687273,40.000002 8,40.000002 Z"/>
      </g>
    </Icon>
  );
}

export default Rss
    