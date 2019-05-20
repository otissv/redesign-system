
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PauseTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 5h4v14H6zM14 5h4v14h-4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </Icon>
  );
}
