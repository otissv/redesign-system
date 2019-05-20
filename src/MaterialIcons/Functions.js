
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Functions (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z" />
    </Icon>
  );
}
