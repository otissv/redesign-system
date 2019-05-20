
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function InsertCommentOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M20 4v13.17L18.83 16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z" /><path d="M18 12H6v2h12v-2zM18 9H6v2h12V9zM18 6H6v2h12V6z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M20 4v13.17L18.83 16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z" /><path d="M18 12H6v2h12v-2zM18 9H6v2h12V9zM18 6H6v2h12V6z" /></g>
    </Icon>
  );
}
