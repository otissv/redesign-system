
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VolumeMute (props) {
  return (
    <Icon {...props}>
      <path d="M7 9v6h4l5 5V4l-5 5H7z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M7 9v6h4l5 5V4l-5 5H7z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
