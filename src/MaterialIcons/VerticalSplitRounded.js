
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VerticalSplitRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4 15h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-8h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm11-1h6c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4 15h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-8h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm11-1h6c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z" /></g>
    </Icon>
  );
}
