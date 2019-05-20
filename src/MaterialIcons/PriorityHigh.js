
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PriorityHigh (props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="19" r="2" /><path d="M10 3h4v12h-4z" /><path fill="none" d="M0 0h24v24H0z" />,<circle cx="12" cy="19" r="2" /><path d="M10 3h4v12h-4z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
