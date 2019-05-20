
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function EjectSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 17h14v2H5v-2zm7-12L5.33 15h13.34L12 5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 17h14v2H5v-2zm7-12L5.33 15h13.34L12 5z" /></g>
    </Icon>
  );
}
