
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BatteryCharging30Sharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v10.5h2L13 7v5.5h2l-1.07 2H17V4z" /><path d="M11 20v-5.5H7V22h10v-7.5h-3.07L11 20z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v10.5h2L13 7v5.5h2l-1.07 2H17V4z" /><path d="M11 20v-5.5H7V22h10v-7.5h-3.07L11 20z" /></g>
    </Icon>
  );
}
