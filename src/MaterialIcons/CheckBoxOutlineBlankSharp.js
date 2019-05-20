
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CheckBoxOutlineBlankSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 5v14H5V5h14m2-2H3v18h18V3z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 5v14H5V5h14m2-2H3v18h18V3z" />
    </Icon>
  );
}
