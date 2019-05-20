
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CallMissedOutgoingTwoTone (props) {
  return (
    <Icon {...props}>
      <path d="M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z" /><path d="M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z" />
    </Icon>
  );
}
