
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SpeakerGroupSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M20 1H8v17.99h12V1zm-6 2c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" /><circle cx="14" cy="12.5" r="2.5" /><path d="M6 5H4v18h12v-2H6z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M20 1H8v17.99h12V1zm-6 2c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" /><circle cx="14" cy="12.5" r="2.5" /><path d="M6 5H4v18h12v-2H6z" /></g>
    </Icon>
  );
}
