
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FlashOn (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M7 2v11h3v9l7-12h-4l4-8z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M7 2v11h3v9l7-12h-4l4-8z" />
    </Icon>
  );
}
