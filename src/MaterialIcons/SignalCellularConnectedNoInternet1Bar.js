
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SignalCellularConnectedNoInternet1Bar (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path fillOpacity=".3" d="M22 8V2L2 22h16V8z" /><path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" /><path fill="none" d="M0 0h24v24H0z" /><path fillOpacity=".3" d="M22 8V2L2 22h16V8z" /><path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" />
    </Icon>
  );
}
