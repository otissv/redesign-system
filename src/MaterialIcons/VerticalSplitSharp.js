
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VerticalSplitSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z" /></g>
    </Icon>
  );
}
