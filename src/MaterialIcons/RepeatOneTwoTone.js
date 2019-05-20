
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function RepeatOneTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M13 15V9h-1l-2 1v1h1.5v4z" /><path d="M19 13h-2v4H7v-3l-4 4 4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M13 15V9h-1l-2 1v1h1.5v4z" /><path d="M19 13h-2v4H7v-3l-4 4 4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z" />
    </Icon>
  );
}
