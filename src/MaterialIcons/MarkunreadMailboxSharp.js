
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function MarkunreadMailboxSharp (props) {
  return (
    <Icon {...props}>
      <path d="M22 6H10v6H8V4h6V0H6v6H2v16h20V6z" /><path d="M22 6H10v6H8V4h6V0H6v6H2v16h20V6z" />
    </Icon>
  );
}
