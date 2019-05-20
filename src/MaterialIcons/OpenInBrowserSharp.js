
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function OpenInBrowserSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M3 4v16h6v-2H5V8h14v10h-4v2h6V4H3zm9 6l-4 4h3v6h2v-6h3l-4-4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M3 4v16h6v-2H5V8h14v10h-4v2h6V4H3zm9 6l-4 4h3v6h2v-6h3l-4-4z" />
    </Icon>
  );
}
