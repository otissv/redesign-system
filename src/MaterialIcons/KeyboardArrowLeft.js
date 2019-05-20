
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function KeyboardArrowLeft (props) {
  return (
    <Icon {...props}>
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" />
    </Icon>
  );
}
