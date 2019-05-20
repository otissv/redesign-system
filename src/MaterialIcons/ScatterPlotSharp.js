
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ScatterPlotSharp (props) {
  return (
    <Icon {...props}>
      <circle cx="7" cy="14" r="3" /><circle cx="11" cy="6" r="3" /><circle cx="16.6" cy="17.6" r="3" />,<circle cx="7" cy="14" r="3" /><circle cx="11" cy="6" r="3" /><circle cx="16.6" cy="17.6" r="3" />
    </Icon>
  );
}
