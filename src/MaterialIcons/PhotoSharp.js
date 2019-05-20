
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PhotoSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 21V3H3v18h18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21 21V3H3v18h18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></g>
    </Icon>
  );
}
