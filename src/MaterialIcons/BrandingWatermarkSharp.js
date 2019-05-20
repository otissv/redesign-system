
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BrandingWatermarkSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M23 3H1v18h22V3zm-2 16h-9v-6h9v6z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M23 3H1v18h22V3zm-2 16h-9v-6h9v6z" />
    </Icon>
  );
}
