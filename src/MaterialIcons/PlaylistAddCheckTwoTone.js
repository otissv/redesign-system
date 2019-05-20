
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PlaylistAddCheckTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M2 6h12v2H2zM2 10h12v2H2zM2 14h8v2H2zM16.01 17L13 14l-1.5 1.5 4.51 4.5L23 13l-1.5-1.5z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M2 6h12v2H2zM2 10h12v2H2zM2 14h8v2H2zM16.01 17L13 14l-1.5 1.5 4.51 4.5L23 13l-1.5-1.5z" />
    </Icon>
  );
}
