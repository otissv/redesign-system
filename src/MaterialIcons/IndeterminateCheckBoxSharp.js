
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function IndeterminateCheckBoxSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M21 3H3v18h18V3zm-4 10H7v-2h10v2z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M21 3H3v18h18V3zm-4 10H7v-2h10v2z" />
    </Icon>
  );
}
