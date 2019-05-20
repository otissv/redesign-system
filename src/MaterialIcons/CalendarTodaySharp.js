
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CalendarTodaySharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M22 3h-3V1h-2v2H7V1H5v2H2v20h20V3zm-2 18H4V8h16v13z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M22 3h-3V1h-2v2H7V1H5v2H2v20h20V3zm-2 18H4V8h16v13z" /></g>
    </Icon>
  );
}
