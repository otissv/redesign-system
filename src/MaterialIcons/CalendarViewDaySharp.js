
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CalendarViewDaySharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z" /></g>
    </Icon>
  );
}
