
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Filter1TwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M7 17h14V3H7v14zm5-12h4v10h-2V7h-2V5z" opacity=".3" /><path d="M14 15h2V5h-4v2h2z" /><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" /><path d="M1 5v16c0 1.1.9 2 2 2h16v-2H3V5H1z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M7 17h14V3H7v14zm5-12h4v10h-2V7h-2V5z" opacity=".3" /><path d="M14 15h2V5h-4v2h2z" /><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" /><path d="M1 5v16c0 1.1.9 2 2 2h16v-2H3V5H1z" /></g>
    </Icon>
  );
}
