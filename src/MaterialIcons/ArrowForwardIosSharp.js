
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowForwardIosSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M24 24H0V0h24v24z" opacity=".87" /><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z" /><path fill="none" d="M24 24H0V0h24v24z" opacity=".87" /><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z" />
    </Icon>
  );
}
