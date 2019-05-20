
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VideocamSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z" />
    </Icon>
  );
}
