
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function StraightenSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M23 6H1v12h22V6zm-2 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M23 6H1v12h22V6zm-2 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z" /></g>
    </Icon>
  );
}
