
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BatteryAlertSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M17 4h-3V2h-4v2H7v18h10V4zm-4 14h-2v-2h2v2zm0-4h-2V9h2v5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M17 4h-3V2h-4v2H7v18h10V4zm-4 14h-2v-2h2v2zm0-4h-2V9h2v5z" /></g>
    </Icon>
  );
}
