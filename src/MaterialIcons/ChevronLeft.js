
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ChevronLeft (props) {
  return (
    <Icon {...props}>
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
