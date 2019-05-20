
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function WorkOutlineSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm18-2v15H2.01V6H8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h6z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm18-2v15H2.01V6H8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h6z" /></g>
    </Icon>
  );
}
