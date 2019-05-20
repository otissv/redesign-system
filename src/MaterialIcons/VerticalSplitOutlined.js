
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VerticalSplitOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 13h8v2H3zM3 17h8v2H3zM3 9h8v2H3zM3 5h8v2H3zM19 7v10h-4V7h4m2-2h-8v14h8V5z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M3 13h8v2H3zM3 17h8v2H3zM3 9h8v2H3zM3 5h8v2H3zM19 7v10h-4V7h4m2-2h-8v14h8V5z" /></g>
    </Icon>
  );
}
