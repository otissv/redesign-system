
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PictureInPictureAltSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 11h-8v6h8v-6zm4 10V3H1v18h22zm-2-1.98H3V4.97h18v14.05z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 11h-8v6h8v-6zm4 10V3H1v18h22zm-2-1.98H3V4.97h18v14.05z" />
    </Icon>
  );
}
