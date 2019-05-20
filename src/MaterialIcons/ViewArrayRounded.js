
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewArrayRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 18h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zM18 6v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1zM9 18h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 18h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zM18 6v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1zM9 18h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1z" /></g>
    </Icon>
  );
}
