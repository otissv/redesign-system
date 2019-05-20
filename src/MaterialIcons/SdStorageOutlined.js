
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SdStorageOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M18 4v16H6V8.83L10.83 4H18m0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /><path d="M9 7h2v4H9zM12 7h2v4h-2zM15 7h2v4h-2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M18 4v16H6V8.83L10.83 4H18m0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /><path d="M9 7h2v4H9zM12 7h2v4h-2zM15 7h2v4h-2z" /></g>
    </Icon>
  );
}
