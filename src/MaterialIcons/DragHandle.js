
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function DragHandle (props) {
  return (
    <Icon {...props}>
      <defs><path id="a" d="M0 0h24v24H0V0z" /></defs><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />,<defs><path id="a" d="M0 0h24v24H0V0z" /></defs><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
    </Icon>
  );
}
