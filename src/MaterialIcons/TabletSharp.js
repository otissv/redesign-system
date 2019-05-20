
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function TabletSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z" /></g>
    </Icon>
  );
}
