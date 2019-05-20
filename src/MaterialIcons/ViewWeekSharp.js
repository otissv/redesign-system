
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewWeekSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M7 5H2v14h5V5zm14 0h-5v14h5V5zm-7 0H9v14h5V5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M7 5H2v14h5V5zm14 0h-5v14h5V5zm-7 0H9v14h5V5z" /></g>
    </Icon>
  );
}
