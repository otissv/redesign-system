
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BatteryCharging60Sharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v7h3.87L13 7v4h4V4z" /><path d="M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v11h10V11h-4v1.5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v7h3.87L13 7v4h4V4z" /><path d="M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v11h10V11h-4v1.5z" /></g>
    </Icon>
  );
}
