
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ControlCameraTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M7.3 13.77L5.54 12l1.76-1.77-1.76-1.77L2 12l3.54 3.54zM15.54 18.46l-1.77-1.76L12 18.46l-1.77-1.76-1.77 1.76L12 22zM18.46 15.54L22 12l-3.54-3.54-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76 1.77-1.76L12 2 8.46 5.54l1.77 1.76z" /><circle cx="12" cy="12" r="3" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M7.3 13.77L5.54 12l1.76-1.77-1.76-1.77L2 12l3.54 3.54zM15.54 18.46l-1.77-1.76L12 18.46l-1.77-1.76-1.77 1.76L12 22zM18.46 15.54L22 12l-3.54-3.54-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76 1.77-1.76L12 2 8.46 5.54l1.77 1.76z" /><circle cx="12" cy="12" r="3" />
    </Icon>
  );
}
