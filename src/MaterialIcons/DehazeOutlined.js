
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function DehazeOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z" /></g>
    </Icon>
  );
}
