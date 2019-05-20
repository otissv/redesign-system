
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FiberManualRecord (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M24 24H0V0h24v24z" /><circle cx="12" cy="12" r="8" /><path fill="none" d="M24 24H0V0h24v24z" /><circle cx="12" cy="12" r="8" />
    </Icon>
  );
}
