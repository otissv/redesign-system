
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BrokenImageSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 3v8.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V3h18zm-3 8.42l3 3.01V21H3v-8.58l3 2.99 4-4 4 4 4-3.99z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 3v8.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V3h18zm-3 8.42l3 3.01V21H3v-8.58l3 2.99 4-4 4 4 4-3.99z" /></g>
    </Icon>
  );
}