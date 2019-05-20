
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FiberSmartRecord (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M24 24H0V0h24v24z" /><circle cx="9" cy="12" r="8" /><path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z" /><path fill="none" d="M24 24H0V0h24v24z" /><circle cx="9" cy="12" r="8" /><path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z" />
    </Icon>
  );
}
