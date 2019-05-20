
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Eject (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 24V0h24v24H0z" /><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" /><path fill="none" d="M0 24V0h24v24H0z" /><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
    </Icon>
  );
}
