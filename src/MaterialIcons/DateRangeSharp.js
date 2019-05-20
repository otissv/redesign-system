
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function DateRangeSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm4-7h-3V2h-2v2H8V2H6v2H3v18h18V4zm-2 16H5V9h14v11z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm4-7h-3V2h-2v2H8V2H6v2H3v18h18V4zm-2 16H5V9h14v11z" /></g>
    </Icon>
  );
}
