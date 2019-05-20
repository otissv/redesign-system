
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PlaylistPlayTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 10h12v2H4zM4 6h12v2H4zM4 14h8v2H4zM14 20l5-3-5-3z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 10h12v2H4zM4 6h12v2H4zM4 14h8v2H4zM14 20l5-3-5-3z" />
    </Icon>
  );
}
