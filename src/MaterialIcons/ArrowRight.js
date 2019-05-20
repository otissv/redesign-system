
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowRight (props) {
  return (
    <Icon {...props}>
      <path d="M10 17l5-5-5-5v10z" /><path fill="none" d="M0 24V0h24v24H0z" /><path d="M10 17l5-5-5-5v10z" /><path fill="none" d="M0 24V0h24v24H0z" />
    </Icon>
  );
}
