
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FlashAutoTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 2v12h3v9l7-12H9l4-9zM17 2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2h-2zm-.15 5.65L18 4l1.15 3.65h-2.3z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 2v12h3v9l7-12H9l4-9zM17 2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2h-2zm-.15 5.65L18 4l1.15 3.65h-2.3z" /></g>
    </Icon>
  );
}
