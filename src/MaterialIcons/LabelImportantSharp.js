
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function LabelImportantSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z" />
    </Icon>
  );
}
