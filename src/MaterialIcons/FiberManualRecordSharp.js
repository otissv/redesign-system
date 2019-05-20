
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FiberManualRecordSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><circle cx="12" cy="12" r="8" /><path fill="none" d="M0 0h24v24H0V0z" /><circle cx="12" cy="12" r="8" />
    </Icon>
  );
}
