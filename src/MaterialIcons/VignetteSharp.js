
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VignetteSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M23 3H1v18h22V3zM12 18c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M23 3H1v18h22V3zM12 18c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z" /></g>
    </Icon>
  );
}
