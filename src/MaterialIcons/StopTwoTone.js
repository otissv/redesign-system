
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function StopTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M8 8h8v8H8z" opacity=".3" /><path d="M6 18h12V6H6v12zM8 8h8v8H8V8z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M8 8h8v8H8z" opacity=".3" /><path d="M6 18h12V6H6v12zM8 8h8v8H8V8z" />
    </Icon>
  );
}
