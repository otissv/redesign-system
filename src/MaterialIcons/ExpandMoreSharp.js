
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ExpandMoreSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M24 24H0V0h24v24z" opacity=".87" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /><path fill="none" d="M24 24H0V0h24v24z" opacity=".87" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
    </Icon>
  );
}
