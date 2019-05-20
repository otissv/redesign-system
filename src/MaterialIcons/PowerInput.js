
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PowerInput (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z" />
    </Icon>
  );
}
