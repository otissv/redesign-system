
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BorderHorizontalTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 3h2v2h-2zM19 3h2v2h-2zM19 7h2v2h-2zM15 3h2v2h-2zM3 19h2v2H3zM3 15h2v2H3zM3 7h2v2H3zM7 19h2v2H7zM11 7h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zM15 19h2v2h-2zM11 19h2v2h-2zM19 15h2v2h-2zM19 19h2v2h-2zM11 15h2v2h-2zM3 11h18v2H3z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M11 3h2v2h-2zM19 3h2v2h-2zM19 7h2v2h-2zM15 3h2v2h-2zM3 19h2v2H3zM3 15h2v2H3zM3 7h2v2H3zM7 19h2v2H7zM11 7h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zM15 19h2v2h-2zM11 19h2v2h-2zM19 15h2v2h-2zM19 19h2v2h-2zM11 15h2v2h-2zM3 11h18v2H3z" /></g>
    </Icon>
  );
}
