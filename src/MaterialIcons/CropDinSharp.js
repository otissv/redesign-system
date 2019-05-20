
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CropDinSharp (props) {
  return (
    <Icon {...props}>
      <path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z" /><path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z" />
    </Icon>
  );
}
