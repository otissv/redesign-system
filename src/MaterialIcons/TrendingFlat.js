
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function TrendingFlat (props) {
  return (
    <Icon {...props}>
      <path d="M22 12l-4-4v3H3v2h15v3z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M22 12l-4-4v3H3v2h15v3z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
