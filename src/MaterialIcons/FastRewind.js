
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FastRewind (props) {
  return (
    <Icon {...props}>
      <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
