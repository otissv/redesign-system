
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Check (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </Icon>
  );
}
