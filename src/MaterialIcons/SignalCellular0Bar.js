
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SignalCellular0Bar (props) {
  return (
    <Icon {...props}>
      <path fillOpacity=".3" d="M2 22h20V2z" /><path fill="none" d="M0 0h24v24H0z" /><path fillOpacity=".3" d="M2 22h20V2z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}