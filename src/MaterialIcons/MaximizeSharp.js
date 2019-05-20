
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function MaximizeSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M3 3h18v2H3V3z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M3 3h18v2H3V3z" />
    </Icon>
  );
}
