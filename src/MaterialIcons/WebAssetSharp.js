
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function WebAssetSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M3 4v16h18V4H3zm16 14H5V8h14v10z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M3 4v16h18V4H3zm16 14H5V8h14v10z" />
    </Icon>
  );
}
