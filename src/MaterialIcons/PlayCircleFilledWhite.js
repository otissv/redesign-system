
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PlayCircleFilledWhite (props) {
  return (
    <Icon {...props}>
      <path transform="scale(0.5, 0.5)" fill="none" d="M0 0h48v48H0z" /><path transform="scale(0.5, 0.5)" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z" /><path transform="scale(0.5, 0.5)" fill="none" d="M0 0h48v48H0z" /><path transform="scale(0.5, 0.5)" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z" />
    </Icon>
  );
}
