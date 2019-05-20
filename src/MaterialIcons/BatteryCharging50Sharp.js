
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BatteryCharging50Sharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M14.47 13.5L11 20v-5.5H9l.53-1H7V22h10v-8.5h-2.53z" /><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v9.5h2.53L13 7v5.5h2l-.53 1H17V4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M14.47 13.5L11 20v-5.5H9l.53-1H7V22h10v-8.5h-2.53z" /><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v9.5h2.53L13 7v5.5h2l-.53 1H17V4z" /></g>
    </Icon>
  );
}
