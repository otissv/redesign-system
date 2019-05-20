
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ChatBubbleSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M22 2H2v20l4-4h16V2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M22 2H2v20l4-4h16V2z" /></g>
    </Icon>
  );
}
