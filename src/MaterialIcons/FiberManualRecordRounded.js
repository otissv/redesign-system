
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FiberManualRecordRounded (props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8" />,<circle cx="12" cy="12" r="8" />
    </Icon>
  );
}
