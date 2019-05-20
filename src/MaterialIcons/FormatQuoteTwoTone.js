
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatQuoteTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M16.62 16h.76L19 12.76V8h-4v4h3.62zM6.62 16h.76L9 12.76V8H5v4h3.62z" opacity=".3" /><path d="M18.62 18L21 13.24V6h-8v8h2.38l-2 4h5.24zM15 12V8h4v4.76L17.38 16h-.76l2-4H15zM3.38 18h5.24L11 13.24V6H3v8h2.38l-2 4zM5 12V8h4v4.76L7.38 16h-.76l2-4H5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M16.62 16h.76L19 12.76V8h-4v4h3.62zM6.62 16h.76L9 12.76V8H5v4h3.62z" opacity=".3" /><path d="M18.62 18L21 13.24V6h-8v8h2.38l-2 4h5.24zM15 12V8h4v4.76L17.38 16h-.76l2-4H15zM3.38 18h5.24L11 13.24V6H3v8h2.38l-2 4zM5 12V8h4v4.76L7.38 16h-.76l2-4H5z" /></g>
    </Icon>
  );
}
