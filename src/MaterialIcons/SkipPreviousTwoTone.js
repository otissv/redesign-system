
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SkipPreviousTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 14.14V9.86L12.97 12z" opacity=".3" /><path d="M6 6h2v12H6zM18 18V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 14.14V9.86L12.97 12z" opacity=".3" /><path d="M6 6h2v12H6zM18 18V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z" />
    </Icon>
  );
}
