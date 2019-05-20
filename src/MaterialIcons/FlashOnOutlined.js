
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FlashOnOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M7 2v11h3v9l7-12h-4l3-8z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M7 2v11h3v9l7-12h-4l3-8z" /></g>
    </Icon>
  );
}
