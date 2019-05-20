
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ThumbDownSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M9.83 23L17 15.82V3H4.69L1 11.6V16h8.31l-1.12 5.38zM19 3h4v12h-4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M9.83 23L17 15.82V3H4.69L1 11.6V16h8.31l-1.12 5.38zM19 3h4v12h-4z" /></g>
    </Icon>
  );
}
