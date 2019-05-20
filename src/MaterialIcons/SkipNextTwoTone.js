
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SkipNextTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M8 9.86v4.28L11.03 12z" opacity=".3" /><path d="M14.5 12L6 6v12l8.5-6zM8 9.86L11.03 12 8 14.14V9.86zM16 6h2v12h-2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M8 9.86v4.28L11.03 12z" opacity=".3" /><path d="M14.5 12L6 6v12l8.5-6zM8 9.86L11.03 12 8 14.14V9.86zM16 6h2v12h-2z" />
    </Icon>
  );
}
