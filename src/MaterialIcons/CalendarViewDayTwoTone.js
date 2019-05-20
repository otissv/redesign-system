
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CalendarViewDayTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 17h18v2H3zM19 12v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z" /><path d="M5 12h14v1H5z" opacity=".3" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 17h18v2H3zM19 12v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z" /><path d="M5 12h14v1H5z" opacity=".3" /></g>
    </Icon>
  );
}
