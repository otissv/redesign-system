
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function KeyboardArrowRight (props) {
  return (
    <Icon {...props}>
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" />
    </Icon>
  );
}
