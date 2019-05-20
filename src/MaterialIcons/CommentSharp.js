
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CommentSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21.99 2H2v16h16l4 4-.01-20zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21.99 2H2v16h16l4 4-.01-20zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></g>
    </Icon>
  );
}
