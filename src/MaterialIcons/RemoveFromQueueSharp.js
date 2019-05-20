
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function RemoveFromQueueSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M23 3H1v16h7v2h8v-2h7V3zm-2 14H3V5h18v12zm-5-7v2H8v-2h8z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M23 3H1v16h7v2h8v-2h7V3zm-2 14H3V5h18v12zm-5-7v2H8v-2h8z" />
    </Icon>
  );
}
