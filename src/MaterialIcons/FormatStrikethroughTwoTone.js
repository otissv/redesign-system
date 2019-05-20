
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatStrikethroughTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 12h18v2H3zM14 10V7h5V4H5v3h5v3zM10 16h4v3h-4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 12h18v2H3zM14 10V7h5V4H5v3h5v3zM10 16h4v3h-4z" /></g>
    </Icon>
  );
}
