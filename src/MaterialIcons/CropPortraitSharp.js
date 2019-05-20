
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CropPortraitSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 3H5v18h14V3zm-2 16H7V5h10v14z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 3H5v18h14V3zm-2 16H7V5h10v14z" /></g>
    </Icon>
  );
}
