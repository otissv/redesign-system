
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Battery20Sharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M7 17v5h10v-5H7z" /><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v13h10V4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M7 17v5h10v-5H7z" /><path fillOpacity=".3" d="M17 4h-3V2h-4v2H7v13h10V4z" /></g>
    </Icon>
  );
}
