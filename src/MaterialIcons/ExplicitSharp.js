
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ExplicitSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M21 3H3v18h18V3zm-6 6h-4v2h4v2h-4v2h4v2H9V7h6v2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M21 3H3v18h18V3zm-6 6h-4v2h4v2h-4v2h4v2H9V7h6v2z" />
    </Icon>
  );
}
