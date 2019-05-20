
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PlayArrowSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M8 5v14l11-7L8 5z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M8 5v14l11-7L8 5z" />
    </Icon>
  );
}
