
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function WifiLockSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M23 14.64c0-1.31-.94-2.5-2.24-2.63-1.5-.15-2.76 1.02-2.76 2.49V16h-1v6h7v-6h-1v-1.36zM22 16h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z" /><path d="M21.31 9.58L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5 .28 0 .55.04.81.08z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M23 14.64c0-1.31-.94-2.5-2.24-2.63-1.5-.15-2.76 1.02-2.76 2.49V16h-1v6h7v-6h-1v-1.36zM22 16h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z" /><path d="M21.31 9.58L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5 .28 0 .55.04.81.08z" /></g>
    </Icon>
  );
}
