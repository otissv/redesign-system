
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BatteryCharging20Sharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 20v-3H7v5h10v-5h-4.4L11 20z" /><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v13h4v-2.5H9L13 7v5.5h2L12.6 17H17V4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 20v-3H7v5h10v-5h-4.4L11 20z" /><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v13h4v-2.5H9L13 7v5.5h2L12.6 17H17V4z" /></g>
    </Icon>
  );
}
