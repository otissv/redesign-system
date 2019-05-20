
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ForwardSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 8V4l8 8-8 8v-4H4V8h8z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 8V4l8 8-8 8v-4H4V8h8z" />
    </Icon>
  );
}
