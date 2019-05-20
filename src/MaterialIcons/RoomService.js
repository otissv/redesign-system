
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function RoomService (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" />
    </Icon>
  );
}
