
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SkipPreviousOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 6h2v12H6zM9.5 12l8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 6h2v12H6zM9.5 12l8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z" />
    </Icon>
  );
}
