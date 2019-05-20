
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SignalCellularConnectedNoInternet0Bar (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path fillOpacity=".3" d="M22 8V2L2 22h16V8z" /><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z" /><path fill="none" d="M0 0h24v24H0z" /><path fillOpacity=".3" d="M22 8V2L2 22h16V8z" /><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z" />
    </Icon>
  );
}
