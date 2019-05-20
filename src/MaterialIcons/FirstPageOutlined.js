
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FirstPageOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M24 0v24H0V0h24z" opacity=".87" /><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" /><path fill="none" d="M24 0v24H0V0h24z" opacity=".87" /><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" />
    </Icon>
  );
}
