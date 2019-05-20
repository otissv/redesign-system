
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function KeyboardBackspaceRounded (props) {
  return (
    <Icon {...props}>
      <path d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z" /><path d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z" />
    </Icon>
  );
}
