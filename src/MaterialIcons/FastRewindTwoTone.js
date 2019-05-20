
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FastRewindTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 14.14V9.86L5.97 12zM18 14.14V9.86L14.97 12z" opacity=".3" /><path d="M11 6l-8.5 6 8.5 6V6zm-2 8.14L5.97 12 9 9.86v4.28zM20 6l-8.5 6 8.5 6V6zm-2 8.14L14.97 12 18 9.86v4.28z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 14.14V9.86L5.97 12zM18 14.14V9.86L14.97 12z" opacity=".3" /><path d="M11 6l-8.5 6 8.5 6V6zm-2 8.14L5.97 12 9 9.86v4.28zM20 6l-8.5 6 8.5 6V6zm-2 8.14L14.97 12 18 9.86v4.28z" />
    </Icon>
  );
}
