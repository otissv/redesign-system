
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowBackIos (props) {
  return (
    <Icon {...props}>
      <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
