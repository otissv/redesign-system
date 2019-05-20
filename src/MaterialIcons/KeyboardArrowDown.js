
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function KeyboardArrowDown (props) {
  return (
    <Icon {...props}>
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" />
    </Icon>
  );
}
