
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatPaintSharp (props) {
  return (
    <Icon {...props}>
      <path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z" /><path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z" />
    </Icon>
  );
}
