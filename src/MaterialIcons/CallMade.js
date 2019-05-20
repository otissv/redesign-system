
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CallMade (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
    </Icon>
  );
}
