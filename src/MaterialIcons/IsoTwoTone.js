
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function IsoTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 19V5L5 19h14zm-2-3.5V17h-5v-1.5h5z" opacity=".3" /><path d="M12 15.5h5V17h-5z" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 19V5L5 19h14zm-2-3.5V17h-5v-1.5h5z" opacity=".3" /><path d="M12 15.5h5V17h-5z" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14z" /></g>
    </Icon>
  );
}