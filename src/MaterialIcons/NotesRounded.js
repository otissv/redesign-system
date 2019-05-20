
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function NotesRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M20 11H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zM4 18h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM20 6H4c-.55 0-1 .45-1 1v.01c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M20 11H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zM4 18h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM20 6H4c-.55 0-1 .45-1 1v.01c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z" /></g>
    </Icon>
  );
}
