
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function BorderOuter (props) {
  return (
    <Icon {...props}>
      <path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
