
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowLeft (props) {
  return (
    <Icon {...props}>
      <path d="M14 7l-5 5 5 5V7z" /><path fill="none" d="M24 0v24H0V0h24z" /><path d="M14 7l-5 5 5 5V7z" /><path fill="none" d="M24 0v24H0V0h24z" />
    </Icon>
  );
}
