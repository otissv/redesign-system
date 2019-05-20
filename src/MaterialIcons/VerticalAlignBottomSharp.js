
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VerticalAlignBottomSharp (props) {
  return (
    <Icon {...props}>
      <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" /><path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
    </Icon>
  );
}
