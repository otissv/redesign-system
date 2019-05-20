
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PlaylistAddTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M2 14h8v2H2zM2 10h12v2H2zM2 6h12v2H2z" /><path d="M18 10h-2v4h-4v2h4v4h2v-4h4v-2h-4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M2 14h8v2H2zM2 10h12v2H2zM2 6h12v2H2z" /><path d="M18 10h-2v4h-4v2h4v4h2v-4h4v-2h-4z" />
    </Icon>
  );
}
