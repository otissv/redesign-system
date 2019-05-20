
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function WrapTextTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4 17h6v2H4z" /><path d="M17 11H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4zM4 5h16v2H4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4 17h6v2H4z" /><path d="M17 11H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4zM4 5h16v2H4z" /></g>
    </Icon>
  );
}
