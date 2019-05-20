
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function EventSeatTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M9 5h6v7H9z" opacity=".3" /><path d="M4 21h2v-4h12v4h2v-6H4zM17 5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v9h10V5zm-2 7H9V5h6v7zM19 10h3v3h-3zM2 10h3v3H2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M9 5h6v7H9z" opacity=".3" /><path d="M4 21h2v-4h12v4h2v-6H4zM17 5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v9h10V5zm-2 7H9V5h6v7zM19 10h3v3h-3zM2 10h3v3H2z" /></g>
    </Icon>
  );
}
