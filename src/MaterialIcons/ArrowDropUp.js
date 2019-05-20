
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowDropUp (props) {
  return (
    <Icon {...props}>
      <path d="M7 14l5-5 5 5z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M7 14l5-5 5 5z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
