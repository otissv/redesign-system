
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Pause (props) {
  return (
    <Icon {...props}>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
