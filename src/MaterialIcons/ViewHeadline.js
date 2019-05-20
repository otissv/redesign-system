
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewHeadline (props) {
  return (
    <Icon {...props}>
      <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" /><path fill="none" d="M0 0h24v24H0V0z" />
    </Icon>
  );
}
