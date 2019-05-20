
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SendTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 8.25l7.51 1-7.5-3.22zM4.01 17.97l7.5-3.22-7.51 1z" opacity=".3" /><path d="M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 8.25l7.51 1-7.5-3.22zM4.01 17.97l7.5-3.22-7.51 1z" opacity=".3" /><path d="M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z" />
    </Icon>
  );
}
