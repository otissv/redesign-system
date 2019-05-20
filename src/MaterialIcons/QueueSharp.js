
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function QueueSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-3 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-3 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
    </Icon>
  );
}
