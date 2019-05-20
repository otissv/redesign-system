
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function NearMe (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
    </Icon>
  );
}
