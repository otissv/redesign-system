
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function AddCommentSharp (props) {
  return (
    <Icon {...props}>
      <path d="M22 2H2v16h16l4 4V2zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z" /><path d="M22 2H2v16h16l4 4V2zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z" />
    </Icon>
  );
}
