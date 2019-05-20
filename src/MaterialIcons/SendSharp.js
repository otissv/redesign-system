
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SendSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z" />
    </Icon>
  );
}
