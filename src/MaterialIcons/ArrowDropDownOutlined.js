
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowDropDownOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M7 10l5 5 5-5H7z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M7 10l5 5 5-5H7z" />
    </Icon>
  );
}
