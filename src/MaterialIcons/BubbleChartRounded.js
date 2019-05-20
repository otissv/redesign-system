
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BubbleChartRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><circle cx="7.2" cy="14.4" r="3.2" /><circle cx="14.8" cy="18" r="2" /><circle cx="15.2" cy="8.8" r="4.8" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><circle cx="7.2" cy="14.4" r="3.2" /><circle cx="14.8" cy="18" r="2" /><circle cx="15.2" cy="8.8" r="4.8" /></g>
    </Icon>
  );
}
