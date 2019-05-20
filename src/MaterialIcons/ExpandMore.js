
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ExpandMore (props) {
  return (
    <Icon {...props}>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
