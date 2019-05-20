
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ListAltSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 7h6v2h-6zM11 11h6v2h-6zM11 15h6v2h-6zM7 7h2v2H7zM7 11h2v2H7zM7 15h2v2H7z" /><path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 7h6v2h-6zM11 11h6v2h-6zM11 15h6v2h-6zM7 7h2v2H7zM7 11h2v2H7zM7 15h2v2H7z" /><path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" /></g>
    </Icon>
  );
}
