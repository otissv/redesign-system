
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PhotoCameraSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><circle cx="12" cy="12" r="3" /><path d="M9 2L7.17 4H2v16h20V4h-5.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><circle cx="12" cy="12" r="3" /><path d="M9 2L7.17 4H2v16h20V4h-5.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" /></g>
    </Icon>
  );
}
