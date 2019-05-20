
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewQuiltOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4 5v13h17V5H4zm2 11V7h3v9H6zm5 0v-3.5h3V16h-3zm8 0h-3v-3.5h3V16zm-8-5.5V7h8v3.5h-8z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4 5v13h17V5H4zm2 11V7h3v9H6zm5 0v-3.5h3V16h-3zm8 0h-3v-3.5h3V16zm-8-5.5V7h8v3.5h-8z" /></g>
    </Icon>
  );
}
