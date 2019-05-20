
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function GifSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11.5 9H13v6h-1.5V9zM10 9H5v6h5v-3H8.5v1.5h-2v-3H10V9zm9 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1h3z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11.5 9H13v6h-1.5V9zM10 9H5v6h5v-3H8.5v1.5h-2v-3H10V9zm9 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1h3z" /></g>
    </Icon>
  );
}
