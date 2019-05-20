
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewCarouselTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M18 6h4v11h-4zM7 19h10V4H7v15zM9 6h6v11H9V6zM2 6h4v11H2z" /><path d="M9 6h6v11H9z" opacity=".3" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M18 6h4v11h-4zM7 19h10V4H7v15zM9 6h6v11H9V6zM2 6h4v11H2z" /><path d="M9 6h6v11H9z" opacity=".3" /></g>
    </Icon>
  );
}
