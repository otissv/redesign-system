
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function LabelSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M17.03 5L3 5.01v13.98l14.03.01L22 12l-4.97-7z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M17.03 5L3 5.01v13.98l14.03.01L22 12l-4.97-7z" />
    </Icon>
  );
}
