
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function StopOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 8v8H8V8h8m2-2H6v12h12V6z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 8v8H8V8h8m2-2H6v12h12V6z" />
    </Icon>
  );
}
