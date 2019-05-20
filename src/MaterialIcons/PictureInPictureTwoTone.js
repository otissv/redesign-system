
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PictureInPictureTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2z" /><path d="M13 9h4v2h-4z" opacity=".3" /><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2z" /><path d="M13 9h4v2h-4z" opacity=".3" /><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z" />
    </Icon>
  );
}