
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PausePresentationSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M1 3v18h22V3H1zm20 16H3V5h18v14z" /><path d="M9 8h2v8H9zM13 8h2v8h-2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M1 3v18h22V3H1zm20 16H3V5h18v14z" /><path d="M9 8h2v8H9zM13 8h2v8h-2z" /></g>
    </Icon>
  );
}
