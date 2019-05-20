
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Stop (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M6 6h12v12H6z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M6 6h12v12H6z" />
    </Icon>
  );
}
