
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function MinimizeSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 19h12v2H6v-2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 19h12v2H6v-2z" />
    </Icon>
  );
}
