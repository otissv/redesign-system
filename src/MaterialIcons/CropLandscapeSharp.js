
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CropLandscapeSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 5H3v14h18V5zm-2 12H5V7h14v10z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 5H3v14h18V5zm-2 12H5V7h14v10z" /></g>
    </Icon>
  );
}
