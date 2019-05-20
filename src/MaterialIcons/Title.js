
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Title (props) {
  return (
    <Icon {...props}>
      <path d="M5 4v3h5.5v12h3V7H19V4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M5 4v3h5.5v12h3V7H19V4z" /><path fill="none" d="M0 0h24v24H0V0z" />
    </Icon>
  );
}
