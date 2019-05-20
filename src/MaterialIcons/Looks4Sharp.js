
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Looks4Sharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M.04 0h24v24h-24V0z" /><g><path d="M21.04 3h-18v18h18V3zm-6 14h-2v-4h-4V7h2v4h2V7h2v10z" /></g>,<path fill="none" d="M.04 0h24v24h-24V0z" /><g><path d="M21.04 3h-18v18h18V3zm-6 14h-2v-4h-4V7h2v4h2V7h2v10z" /></g>
    </Icon>
  );
}
