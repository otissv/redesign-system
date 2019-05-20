
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PausePresentationOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 3H3c-1.1 0-2 .85-2 1.95v14c0 1.1.9 2.05 2 2.05h18c1.1 0 2-.95 2-2.05v-14C23 3.85 22.1 3 21 3zm0 16H3V5h18v14z" /><path d="M9 8h2v8H9zM13 8h2v8h-2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 3H3c-1.1 0-2 .85-2 1.95v14c0 1.1.9 2.05 2 2.05h18c1.1 0 2-.95 2-2.05v-14C23 3.85 22.1 3 21 3zm0 16H3V5h18v14z" /><path d="M9 8h2v8H9zM13 8h2v8h-2z" /></g>
    </Icon>
  );
}
