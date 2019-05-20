
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FirstPage (props) {
  return (
    <Icon {...props}>
      <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" /><path fill="none" d="M24 24H0V0h24v24z" /><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" /><path fill="none" d="M24 24H0V0h24v24z" />
    </Icon>
  );
}
