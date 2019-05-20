
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ExpandLess (props) {
  return (
    <Icon {...props}>
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
