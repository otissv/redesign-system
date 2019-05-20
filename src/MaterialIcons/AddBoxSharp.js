
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function AddBoxSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M21 3H3v18h18V3zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M21 3H3v18h18V3zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </Icon>
  );
}
