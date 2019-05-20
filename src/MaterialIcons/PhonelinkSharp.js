
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PhonelinkSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4 6h18V4H2v13H0v3h14v-3H4V6zm20 2h-8v12h8V8zm-2 9h-4v-7h4v7z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4 6h18V4H2v13H0v3h14v-3H4V6zm20 2h-8v12h8V8zm-2 9h-4v-7h4v7z" /></g>
    </Icon>
  );
}
