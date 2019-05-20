
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function DragHandleOutlined (props) {
  return (
    <Icon {...props}>
      <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" /><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
    </Icon>
  );
}
