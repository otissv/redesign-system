
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function DraftsSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M21.99 6.86L12 1 2 6.86V20h20l-.01-13.14zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M21.99 6.86L12 1 2 6.86V20h20l-.01-13.14zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z" />
    </Icon>
  );
}
