
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function WifiLockRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21.31 9.58L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l10.4 13.87c.8 1.07 2.4 1.07 3.2 0l1.9-2.53V14.5c0-2.76 2.24-5 5-5 .28 0 .55.04.81.08z" /><path d="M23 16v-1.5c0-1.38-1.12-2.5-2.5-2.5S18 13.12 18 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21.31 9.58L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l10.4 13.87c.8 1.07 2.4 1.07 3.2 0l1.9-2.53V14.5c0-2.76 2.24-5 5-5 .28 0 .55.04.81.08z" /><path d="M23 16v-1.5c0-1.38-1.12-2.5-2.5-2.5S18 13.12 18 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z" /></g>
    </Icon>
  );
}