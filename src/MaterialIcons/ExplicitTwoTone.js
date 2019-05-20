
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ExplicitTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M5 19h14V5H5v14zM9 7h6v2h-4v2h4v2h-4v2h4v2H9V7z" opacity=".3" /><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H5V5h14v14z" /><path d="M15 15h-4v-2h4v-2h-4V9h4V7H9v10h6z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M5 19h14V5H5v14zM9 7h6v2h-4v2h4v2h-4v2h4v2H9V7z" opacity=".3" /><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H5V5h14v14z" /><path d="M15 15h-4v-2h4v-2h-4V9h4V7H9v10h6z" />
    </Icon>
  );
}
