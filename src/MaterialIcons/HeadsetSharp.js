
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function HeadsetSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V20h6v-8H5v-1.71C5 6.45 7.96 3.11 11.79 3 15.76 2.89 19 6.06 19 10v2h-4v8h6V10c0-5.17-4.36-9.32-9.6-8.98z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V20h6v-8H5v-1.71C5 6.45 7.96 3.11 11.79 3 15.76 2.89 19 6.06 19 10v2h-4v8h6V10c0-5.17-4.36-9.32-9.6-8.98z" /></g>
    </Icon>
  );
}