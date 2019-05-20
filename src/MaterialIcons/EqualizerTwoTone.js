
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function EqualizerTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 9h4v11h-4zM10 4h4v16h-4zM4 12h4v8H4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 9h4v11h-4zM10 4h4v16h-4zM4 12h4v8H4z" />
    </Icon>
  );
}
