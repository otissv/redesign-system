
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FirstPageRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M24 0v24H0V0h24z" opacity=".87" /><path d="M17.7 15.89L13.82 12l3.89-3.89c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.38.38-1.02-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z" /><path fill="none" d="M24 0v24H0V0h24z" opacity=".87" /><path d="M17.7 15.89L13.82 12l3.89-3.89c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.38.38-1.02-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z" />
    </Icon>
  );
}
