
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewCompactSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" /></g>
    </Icon>
  );
}
