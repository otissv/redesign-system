
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ShortTextOutlined (props) {
  return (
    <Icon {...props}>
      <path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z" /><path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z" />
    </Icon>
  );
}
