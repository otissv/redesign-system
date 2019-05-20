
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BorderOuterTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 11h2v2h-2zM11 7h2v2h-2z" /><path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z" /><path d="M15 11h2v2h-2zM7 11h2v2H7zM11 15h2v2h-2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 11h2v2h-2zM11 7h2v2h-2z" /><path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z" /><path d="M15 11h2v2h-2zM7 11h2v2H7zM11 15h2v2h-2z" /></g>
    </Icon>
  );
}
