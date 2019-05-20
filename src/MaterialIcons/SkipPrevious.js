
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SkipPrevious (props) {
  return (
    <Icon {...props}>
      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
