
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ThumbsUpDownSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M12 5H5.82l.78-3.78L5.38 0 0 5.38V14h9.24L12 7.54zM14.76 10L12 16.46V19h6.18l-.78 3.78L18.62 24 24 18.62V10z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M12 5H5.82l.78-3.78L5.38 0 0 5.38V14h9.24L12 7.54zM14.76 10L12 16.46V19h6.18l-.78 3.78L18.62 24 24 18.62V10z" /></g>
    </Icon>
  );
}
