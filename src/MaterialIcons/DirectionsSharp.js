
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function DirectionsSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M22.41 12L12 1.59 1.59 11.99 12 22.41 22.41 12zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5-3.5 3.5z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M22.41 12L12 1.59 1.59 11.99 12 22.41 22.41 12zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5-3.5 3.5z" />
    </Icon>
  );
}
