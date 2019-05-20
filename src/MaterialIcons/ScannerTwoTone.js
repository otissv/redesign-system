
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ScannerTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 14v4h14v-4H5zm3 3H6v-2h2v2zm10 0h-8v-2h8v2z" opacity=".3" /><path d="M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM19 18H5v-4h14v4z" /><path d="M6 15h2v2H6zM10 15h8v2h-8z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 14v4h14v-4H5zm3 3H6v-2h2v2zm10 0h-8v-2h8v2z" opacity=".3" /><path d="M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM19 18H5v-4h14v4z" /><path d="M6 15h2v2H6zM10 15h8v2h-8z" /></g>
    </Icon>
  );
}
