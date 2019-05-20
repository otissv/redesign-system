
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewCarousel (props) {
  return (
    <Icon {...props}>
      <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
