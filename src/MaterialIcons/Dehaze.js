
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Dehaze (props) {
  return (
    <Icon {...props}>
      <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
