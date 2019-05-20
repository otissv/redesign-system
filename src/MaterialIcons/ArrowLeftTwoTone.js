
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowLeftTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M24 0v24H0V0h24z" opacity=".87" /><path d="M14 7l-5 5 5 5V7z" /><path fill="none" d="M24 0v24H0V0h24z" opacity=".87" /><path d="M14 7l-5 5 5 5V7z" />
    </Icon>
  );
}
