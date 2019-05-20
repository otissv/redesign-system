
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function RestaurantSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zM11 9H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zM11 9H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z" />
    </Icon>
  );
}