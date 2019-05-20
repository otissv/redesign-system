
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CompareArrows (props) {
  return (
    <Icon {...props}>
      <defs><path id="a" d="M0 0h24v24H0V0z" /></defs><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" />,<defs><path id="a" d="M0 0h24v24H0V0z" /></defs><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" />
    </Icon>
  );
}
