
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function NotesSharp (props) {
  return (
    <Icon {...props}>
      <path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z" /><path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z" />
    </Icon>
  );
}
