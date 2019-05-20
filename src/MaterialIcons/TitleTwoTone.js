
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function TitleTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 7h5.5v12h3V7H19V4H5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 7h5.5v12h3V7H19V4H5z" /></g>
    </Icon>
  );
}
