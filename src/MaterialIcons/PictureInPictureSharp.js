
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PictureInPictureSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 7h-8v6h8V7zm4-4H1v17.98h22V3zm-2 16.01H3V4.98h18v14.03z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 7h-8v6h8V7zm4-4H1v17.98h22V3zm-2 16.01H3V4.98h18v14.03z" />
    </Icon>
  );
}
