
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function LocalCafeOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 5v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10m4-2H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-2 5V5h2v3h-2zm2 11H2v2h18v-2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 5v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10m4-2H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-2 5V5h2v3h-2zm2 11H2v2h18v-2z" />
    </Icon>
  );
}
