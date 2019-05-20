
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function LocalBarOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M14.77 9L12 12.11 9.23 9h5.54M21 3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9V3zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M14.77 9L12 12.11 9.23 9h5.54M21 3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9V3zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
    </Icon>
  );
}
