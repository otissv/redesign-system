
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PhotoLibraryOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /><path d="M11.5 11.67l1.69 2.26 2.48-3.1L19 15H9z" /><path d="M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /><path d="M11.5 11.67l1.69 2.26 2.48-3.1L19 15H9z" /><path d="M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" /></g>
    </Icon>
  );
}
