
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ModeCommentSharp (props) {
  return (
    <Icon {...props}>
      <path d="M22 2H2v16h16l4 4z" /><path d="M22 2H2v16h16l4 4z" />
    </Icon>
  );
}
