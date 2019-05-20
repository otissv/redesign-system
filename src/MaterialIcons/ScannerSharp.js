
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ScannerSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4.2 5l-.7 1.9L17.6 12H3v8h18v-8.86L4.2 5zM7 17H5v-2h2v2zm12 0H9v-2h10v2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4.2 5l-.7 1.9L17.6 12H3v8h18v-8.86L4.2 5zM7 17H5v-2h2v2zm12 0H9v-2h10v2z" /></g>
    </Icon>
  );
}
