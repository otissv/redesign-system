
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VolumeMuteTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 13h2.83L14 15.17V8.83L11.83 11H9z" opacity=".3" /><path d="M7 9v6h4l5 5V4l-5 5H7zm7-.17v6.34L11.83 13H9v-2h2.83L14 8.83z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9 13h2.83L14 15.17V8.83L11.83 11H9z" opacity=".3" /><path d="M7 9v6h4l5 5V4l-5 5H7zm7-.17v6.34L11.83 13H9v-2h2.83L14 8.83z" />
    </Icon>
  );
}
