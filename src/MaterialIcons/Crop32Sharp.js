
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Crop32Sharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 4H3v16h18V4zm-2 14H5V6h14v12z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 4H3v16h18V4zm-2 14H5V6h14v12z" /></g>
    </Icon>
  );
}
