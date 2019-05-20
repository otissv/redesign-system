
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewCompactTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 13h9v4h-9zM5 13h4v4H5zM5 7h15v4H5z" opacity=".3" /><path d="M3 5v14h19V5H3zm6 12H5v-4h4v4zm11 0h-9v-4h9v4zm0-6H5V7h15v4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 13h9v4h-9zM5 13h4v4H5zM5 7h15v4H5z" opacity=".3" /><path d="M3 5v14h19V5H3zm6 12H5v-4h4v4zm11 0h-9v-4h9v4zm0-6H5V7h15v4z" /></g>
    </Icon>
  );
}
