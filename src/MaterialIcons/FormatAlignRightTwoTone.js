
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatAlignRightTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 3h18v2H3zM3 19h18v2H3zM3 11h18v2H3zM9 15h12v2H9zM9 7h12v2H9z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 3h18v2H3zM3 19h18v2H3zM3 11h18v2H3zM9 15h12v2H9zM9 7h12v2H9z" /></g>
    </Icon>
  );
}
