
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function LooksOneTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 5H5v14h14V5zm-5 12h-2V9h-2V7h4v10z" opacity=".3" /><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5z" /><path d="M10 9h2v8h2V7h-4z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 5H5v14h14V5zm-5 12h-2V9h-2V7h4v10z" opacity=".3" /><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5z" /><path d="M10 9h2v8h2V7h-4z" /></g>
    </Icon>
  );
}