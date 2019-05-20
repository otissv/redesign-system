
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewListSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" /><g><path d="M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h12v-4H8v4zm0 5h12v-4H8v4zM8 5v4h12V5H8z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" opacity=".87" /><g><path d="M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h12v-4H8v4zm0 5h12v-4H8v4zM8 5v4h12V5H8z" /></g>
    </Icon>
  );
}
