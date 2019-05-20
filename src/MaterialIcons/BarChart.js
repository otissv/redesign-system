
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BarChart (props) {
  return (
    <Icon {...props}>
      <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
