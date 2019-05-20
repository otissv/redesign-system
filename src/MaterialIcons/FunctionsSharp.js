
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FunctionsSharp (props) {
  return (
    <Icon {...props}>
      <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z" /><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z" />
    </Icon>
  );
}
