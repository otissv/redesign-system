
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CallReceived (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
    </Icon>
  );
}
