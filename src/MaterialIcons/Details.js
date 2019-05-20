
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Details (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" />
    </Icon>
  );
}
