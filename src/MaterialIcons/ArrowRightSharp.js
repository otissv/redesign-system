
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowRightSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M10 17l5-5-5-5v10z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M10 17l5-5-5-5v10z" />
    </Icon>
  );
}
