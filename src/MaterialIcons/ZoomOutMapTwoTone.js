
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ZoomOutMapTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M17.3 5.3l-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM9 3H3v6l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3zM8.17 14.41L5.3 17.3 3 15v6h6l-2.3-2.3 2.89-2.87zM15.83 14.41l-1.42 1.42 2.89 2.87L15 21h6v-6l-2.3 2.3z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M17.3 5.3l-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM9 3H3v6l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3zM8.17 14.41L5.3 17.3 3 15v6h6l-2.3-2.3 2.89-2.87zM15.83 14.41l-1.42 1.42 2.89 2.87L15 21h6v-6l-2.3 2.3z" />
    </Icon>
  );
}
