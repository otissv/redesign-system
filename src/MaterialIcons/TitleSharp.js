
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function TitleSharp (props) {
  return (
    <Icon {...props}>
      <path d="M5 4v3h5.5v12h3V7H19V4H5z" /><path d="M5 4v3h5.5v12h3V7H19V4H5z" />
    </Icon>
  );
}
