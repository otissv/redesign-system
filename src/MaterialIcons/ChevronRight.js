
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ChevronRight (props) {
  return (
    <Icon {...props}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
