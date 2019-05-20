
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SpaceBarSharp (props) {
  return (
    <Icon {...props}>
      <path d="M18 9v4H6V9H4v6h16V9h-2z" /><path d="M18 9v4H6V9H4v6h16V9h-2z" />
    </Icon>
  );
}
