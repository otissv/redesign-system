
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewDaySharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z" /></g>
    </Icon>
  );
}
