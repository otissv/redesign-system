
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ForwardTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M14 14v1.17L17.17 12 14 8.83V10H6v4z" opacity=".3" /><path d="M20 12l-8-8v4H4v8h8v4l8-8zM6 14v-4h8V8.83L17.17 12 14 15.17V14H6z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M14 14v1.17L17.17 12 14 8.83V10H6v4z" opacity=".3" /><path d="M20 12l-8-8v4H4v8h8v4l8-8zM6 14v-4h8V8.83L17.17 12 14 15.17V14H6z" />
    </Icon>
  );
}
