
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function LastPage (props) {
  return (
    <Icon {...props}>
      <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" /><path fill="none" d="M0 0h24v24H0V0z" />
    </Icon>
  );
}