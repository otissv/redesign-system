
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VideoLibrarySharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zM12 14.5v-9l6 4.5-6 4.5z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zM12 14.5v-9l6 4.5-6 4.5z" />
    </Icon>
  );
}
