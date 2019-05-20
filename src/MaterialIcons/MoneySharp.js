
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function MoneySharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M14 16h5V8h-5v8zm2-6h1v4h-1v-4zM8 16h5V8H8v8zm2-6h1v4h-1v-4zM5 8h2v8H5z" /><path d="M2 4v16h20V4H2zm18 14H4V6h16v12z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M14 16h5V8h-5v8zm2-6h1v4h-1v-4zM8 16h5V8H8v8zm2-6h1v4h-1v-4zM5 8h2v8H5z" /><path d="M2 4v16h20V4H2zm18 14H4V6h16v12z" />
    </Icon>
  );
}
