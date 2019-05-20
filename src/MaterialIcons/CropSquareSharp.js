
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CropSquareSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M20 4H4v16h16V4zm-2 14H6V6h12v12z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M20 4H4v16h16V4zm-2 14H6V6h12v12z" /></g>
    </Icon>
  );
}
