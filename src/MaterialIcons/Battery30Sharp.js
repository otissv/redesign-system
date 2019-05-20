
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Battery30Sharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v11h10V4z" /><path d="M7 15v7h10v-7H7z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v11h10V4z" /><path d="M7 15v7h10v-7H7z" /></g>
    </Icon>
  );
}
