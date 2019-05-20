
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ExposureNeg1 (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" /><path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z" /><path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" /><path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z" />
    </Icon>
  );
}
