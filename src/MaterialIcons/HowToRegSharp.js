
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function HowToRegSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41-6.53 6.59z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41-6.53 6.59z" />
    </Icon>
  );
}