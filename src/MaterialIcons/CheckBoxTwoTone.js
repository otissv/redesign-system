
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CheckBoxTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z" opacity=".3" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" /><path d="M17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z" opacity=".3" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" /><path d="M17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z" />
    </Icon>
  );
}
