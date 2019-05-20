
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CalendarViewDay (props) {
  return (
    <Icon {...props}>
      <path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
