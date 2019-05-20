
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SlideshowSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M10 8v8l5-4-5-4zm11-5H3v18h18V3zm-2 16H5V5h14v14z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M10 8v8l5-4-5-4zm11-5H3v18h18V3zm-2 16H5V5h14v14z" /></g>
    </Icon>
  );
}