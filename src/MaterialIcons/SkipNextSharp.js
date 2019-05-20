
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SkipNextSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </Icon>
  );
}
