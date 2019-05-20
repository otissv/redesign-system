
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatAlignCenterTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 3h18v2H3zM7 15h10v2H7zM7 7h10v2H7zM3 11h18v2H3zM3 19h18v2H3z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 3h18v2H3zM7 15h10v2H7zM7 7h10v2H7zM3 11h18v2H3zM3 19h18v2H3z" /></g>
    </Icon>
  );
}
