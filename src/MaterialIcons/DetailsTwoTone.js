
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function DetailsTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M6.38 6L12 16l5.63-10z" opacity=".3" /><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M6.38 6L12 16l5.63-10z" opacity=".3" /><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" /></g>
    </Icon>
  );
}
