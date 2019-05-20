
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VerticalAlignCenterTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 1v4H8l4 4 4-4h-3V1zM4 11h16v2H4zM8 19h3v4h2v-4h3l-4-4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 1v4H8l4 4 4-4h-3V1zM4 11h16v2H4zM8 19h3v4h2v-4h3l-4-4z" /></g>
    </Icon>
  );
}
