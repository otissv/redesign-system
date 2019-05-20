
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VideocamOffSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86L2 3.27 4.73 6H3v12h13.73l3 3 1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86L2 3.27 4.73 6H3v12h13.73l3 3 1.41-1.41z" />
    </Icon>
  );
}
