
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function QueuePlayNextSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M23 3H1v16h7v2h8v-2h2v-2H3V5h18v8h2V3zm-10 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M23 3H1v16h7v2h8v-2h2v-2H3V5h18v8h2V3zm-10 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z" />
    </Icon>
  );
}
