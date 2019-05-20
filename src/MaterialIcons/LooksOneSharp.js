
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function LooksOneSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 3H3v18h18V3zm-7 14h-2V9h-2V7h4v10z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 3H3v18h18V3zm-7 14h-2V9h-2V7h4v10z" /></g>
    </Icon>
  );
}
