
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Crop75Rounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-1 8H6c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-1 8H6c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1z" /></g>
    </Icon>
  );
}
