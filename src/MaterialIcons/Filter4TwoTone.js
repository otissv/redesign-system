
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Filter4TwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 3H7v14h14V3zm-4 12h-2v-4h-4V5h2v4h2V5h2v10z" opacity=".3" /><path d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2z" /><path d="M7 19h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM7 3h14v14H7V3z" /><path d="M15 9h-2V5h-2v6h4v4h2V5h-2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 3H7v14h14V3zm-4 12h-2v-4h-4V5h2v4h2V5h2v10z" opacity=".3" /><path d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2z" /><path d="M7 19h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM7 3h14v14H7V3z" /><path d="M15 9h-2V5h-2v6h4v4h2V5h-2z" /></g>
    </Icon>
  );
}
