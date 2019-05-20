
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PlayArrowTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M10 8.64v6.72L15.27 12z" opacity=".3" /><path d="M8 19l11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M10 8.64v6.72L15.27 12z" opacity=".3" /><path d="M8 19l11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z" />
    </Icon>
  );
}
