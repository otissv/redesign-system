
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function OndemandVideoOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M9 7v8l7-4z" /><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M9 7v8l7-4z" /><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" /></g>
    </Icon>
  );
}