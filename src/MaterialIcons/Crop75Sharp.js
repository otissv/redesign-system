
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Crop75Sharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 7H3v10h18V7zm-2 8H5V9h14v6z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 7H3v10h18V7zm-2 8H5V9h14v6z" /></g>
    </Icon>
  );
}
