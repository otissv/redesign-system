
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ForwardOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M14 8.83L17.17 12 14 15.17V14H6v-4h8V8.83M12 4v4H4v8h8v4l8-8-8-8z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M14 8.83L17.17 12 14 15.17V14H6v-4h8V8.83M12 4v4H4v8h8v4l8-8-8-8z" />
    </Icon>
  );
}
