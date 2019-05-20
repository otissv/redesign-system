
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function QueuePlayNextTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M13 15v-3h3v-2h-3V7h-2v3H8v2h3v3zM18 15l3 3-3 3 1.5 1.5L24 18l-4.5-4.5z" /><path d="M8 19v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M13 15v-3h3v-2h-3V7h-2v3H8v2h3v3zM18 15l3 3-3 3 1.5 1.5L24 18l-4.5-4.5z" /><path d="M8 19v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5z" />
    </Icon>
  );
}
