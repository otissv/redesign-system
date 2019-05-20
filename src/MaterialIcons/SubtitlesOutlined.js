
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SubtitlesOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" /><path d="M6 10h2v2H6zM6 14h8v2H6zM16 14h2v2h-2zM10 10h8v2h-8z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" /><path d="M6 10h2v2H6zM6 14h8v2H6zM16 14h2v2h-2zM10 10h8v2h-8z" />
    </Icon>
  );
}
