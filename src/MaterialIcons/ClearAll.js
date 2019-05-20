
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ClearAll (props) {
  return (
    <Icon {...props}>
      <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
