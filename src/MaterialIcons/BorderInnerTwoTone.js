
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BorderInnerTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 15h2v2H3zM3 3h2v2H3zM3 19h2v2H3z" /><path d="M11 21h2v-8h8v-2h-8V3h-2v8H3v2h8z" /><path d="M7 19h2v2H7zM19 15h2v2h-2zM15 19h2v2h-2zM19 19h2v2h-2zM3 7h2v2H3zM19 7h2v2h-2zM7 3h2v2H7zM15 3h2v2h-2zM19 3h2v2h-2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 15h2v2H3zM3 3h2v2H3zM3 19h2v2H3z" /><path d="M11 21h2v-8h8v-2h-8V3h-2v8H3v2h8z" /><path d="M7 19h2v2H7zM19 15h2v2h-2zM15 19h2v2h-2zM19 19h2v2h-2zM3 7h2v2H3zM19 7h2v2h-2zM7 3h2v2H7zM15 3h2v2h-2zM19 3h2v2h-2z" /></g>
    </Icon>
  );
}
