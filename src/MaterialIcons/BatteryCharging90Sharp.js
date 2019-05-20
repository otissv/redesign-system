
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BatteryCharging90Sharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4V4z" /><path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4v4.5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4V4z" /><path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4v4.5z" /></g>
    </Icon>
  );
}
