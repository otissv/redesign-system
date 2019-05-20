
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function EventSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M17 13h-5v5h5v-5zM16 2v2H8V2H6v2H3.01L3 22h18V4h-3V2h-2zm3 18H5V9h14v11z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M17 13h-5v5h5v-5zM16 2v2H8V2H6v2H3.01L3 22h18V4h-3V2h-2zm3 18H5V9h14v11z" /></g>
    </Icon>
  );
}
