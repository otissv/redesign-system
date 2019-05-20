
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function LabelImportantOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 18.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 18.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99z" />
    </Icon>
  );
}
