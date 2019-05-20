
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VerticalAlignTop (props) {
  return (
    <Icon {...props}>
      <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
