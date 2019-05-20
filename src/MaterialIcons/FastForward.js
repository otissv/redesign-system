
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FastForward (props) {
  return (
    <Icon {...props}>
      <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
