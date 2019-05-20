
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function MailSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M22 4H2v16h20V4zm-2 4l-8 5-8-5V6l8 5 8-5v2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M22 4H2v16h20V4zm-2 4l-8 5-8-5V6l8 5 8-5v2z" />
    </Icon>
  );
}
