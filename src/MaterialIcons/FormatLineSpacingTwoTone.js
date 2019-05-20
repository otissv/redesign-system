
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatLineSpacingTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M10 5h12v2H10zM10 17h12v2H10zM1.5 17L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zM10 11h12v2H10z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M10 5h12v2H10zM10 17h12v2H10zM1.5 17L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zM10 11h12v2H10z" /></g>
    </Icon>
  );
}
