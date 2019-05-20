
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ChatBubbleOutlineSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z" /></g>
    </Icon>
  );
}
