
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowForwardIos (props) {
  return (
    <Icon {...props}>
      <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
