
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SpaceBarTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M18 13H6V9H4v6h16V9h-2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M18 13H6V9H4v6h16V9h-2z" /></g>
    </Icon>
  );
}
