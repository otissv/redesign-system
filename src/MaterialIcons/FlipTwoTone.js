
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FlipTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 7h2v2h-2zM19 21c1.1 0 2-.9 2-2h-2v2zM19 15h2v2h-2zM19 11h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5h4zM19 3v2h2c0-1.1-.9-2-2-2zM11 1h2v22h-2zM15 3h2v2h-2zM15 19h2v2h-2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 7h2v2h-2zM19 21c1.1 0 2-.9 2-2h-2v2zM19 15h2v2h-2zM19 11h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5h4zM19 3v2h2c0-1.1-.9-2-2-2zM11 1h2v22h-2zM15 3h2v2h-2zM15 19h2v2h-2z" /></g>
    </Icon>
  );
}