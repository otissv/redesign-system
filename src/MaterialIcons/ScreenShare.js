
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ScreenShare (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z" />
    </Icon>
  );
}
