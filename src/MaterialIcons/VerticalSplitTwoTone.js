
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VerticalSplitTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M15 7h4v10h-4z" opacity=".3" /><path d="M3 13h8v2H3zM3 17h8v2H3zM3 9h8v2H3zM3 5h8v2H3zM13 5v14h8V5h-8zm6 12h-4V7h4v10z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M15 7h4v10h-4z" opacity=".3" /><path d="M3 13h8v2H3zM3 17h8v2H3zM3 9h8v2H3zM3 5h8v2H3zM13 5v14h8V5h-8zm6 12h-4V7h4v10z" /></g>
    </Icon>
  );
}
