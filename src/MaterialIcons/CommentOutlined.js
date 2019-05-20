
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CommentOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16z" /><path d="M6 12h12v2H6zM6 9h12v2H6zM6 6h12v2H6z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16z" /><path d="M6 12h12v2H6zM6 9h12v2H6zM6 6h12v2H6z" /></g>
    </Icon>
  );
}
