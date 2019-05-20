
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PlayArrowOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
    </Icon>
  );
}
