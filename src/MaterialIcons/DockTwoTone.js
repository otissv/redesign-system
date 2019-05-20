
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function DockTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M8 5h8v10H8z" opacity=".3" /><path d="M8 21h8v2H8zM16 1.01L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M8 5h8v10H8z" opacity=".3" /><path d="M8 21h8v2H8zM16 1.01L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z" /></g>
    </Icon>
  );
}
