
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function DockSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M8 23h8v-2H8v2zM18 1.01L6 1v18h12V1.01zM16 15H8V5h8v10z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M8 23h8v-2H8v2zM18 1.01L6 1v18h12V1.01zM16 15H8V5h8v10z" /></g>
    </Icon>
  );
}
