
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ReportOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" /><circle cx="12" cy="16" r="1" /><path d="M11 7h2v7h-2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" /><circle cx="12" cy="16" r="1" /><path d="M11 7h2v7h-2z" />
    </Icon>
  );
}
