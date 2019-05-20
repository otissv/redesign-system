
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FlashOnTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M17 10h-4l3-8H7v11h3v9z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M17 10h-4l3-8H7v11h3v9z" /></g>
    </Icon>
  );
}
