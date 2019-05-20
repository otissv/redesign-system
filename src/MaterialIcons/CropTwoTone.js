
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CropTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 17c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7V1H5v4H1v2h4v10z" /><path d="M19 15V7c0-1.1-.9-2-2-2H9v2h8v8h2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 17c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7V1H5v4H1v2h4v10z" /><path d="M19 15V7c0-1.1-.9-2-2-2H9v2h8v8h2z" /></g>
    </Icon>
  );
}