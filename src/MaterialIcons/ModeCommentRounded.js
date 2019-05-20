
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ModeCommentRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4z" /></g>
    </Icon>
  );
}