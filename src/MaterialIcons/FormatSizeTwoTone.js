
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatSizeTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 12h3v7h3v-7h3V9H3z" /><path d="M9 7h5v12h3V7h5V4H9z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 12h3v7h3v-7h3V9H3z" /><path d="M9 7h5v12h3V7h5V4H9z" /></g>
    </Icon>
  );
}
