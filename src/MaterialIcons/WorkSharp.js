
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function WorkSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-8 0h-4V4h4v2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-8 0h-4V4h4v2z" /></g>
    </Icon>
  );
}
