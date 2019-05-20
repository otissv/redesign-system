
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ForumTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M15 11V4H4v8.17L5.17 11H6z" opacity=".3" /><path d="M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zm-12-.83V4h11v7H5.17L4 12.17z" /><path d="M22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M15 11V4H4v8.17L5.17 11H6z" opacity=".3" /><path d="M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zm-12-.83V4h11v7H5.17L4 12.17z" /><path d="M22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7z" /></g>
    </Icon>
  );
}
