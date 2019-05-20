
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SignalCellularNull (props) {
  return (
    <Icon {...props}>
      <path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
