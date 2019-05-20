
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FastForwardTwoTone (props) {
  return (
    <Icon {...props}>
      <path d="M15 9.86v4.28L18.03 12zM6 9.86v4.28L9.03 12z" opacity=".3" /><path d="M4 18l8.5-6L4 6v12zm2-8.14L9.03 12 6 14.14V9.86zM21.5 12L13 6v12l8.5-6zM15 9.86L18.03 12 15 14.14V9.86z" /><path d="M15 9.86v4.28L18.03 12zM6 9.86v4.28L9.03 12z" opacity=".3" /><path d="M4 18l8.5-6L4 6v12zm2-8.14L9.03 12 6 14.14V9.86zM21.5 12L13 6v12l8.5-6zM15 9.86L18.03 12 15 14.14V9.86z" />
    </Icon>
  );
}
