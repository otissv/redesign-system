
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatQuote (props) {
  return (
    <Icon {...props}>
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
