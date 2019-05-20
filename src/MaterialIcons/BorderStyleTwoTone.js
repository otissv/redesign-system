
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BorderStyleTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 19h2v2h-2zM19 11h2v2h-2zM19 15h2v2h-2zM15 19h2v2h-2zM3 21h2V5h16V3H3z" /><path d="M19 7h2v2h-2zM11 19h2v2h-2zM7 19h2v2H7z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M19 19h2v2h-2zM19 11h2v2h-2zM19 15h2v2h-2zM15 19h2v2h-2zM3 21h2V5h16V3H3z" /><path d="M19 7h2v2h-2zM11 19h2v2h-2zM7 19h2v2H7z" /></g>
    </Icon>
  );
}
