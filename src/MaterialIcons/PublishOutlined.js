
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PublishOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 4h14v2H5zM5 14h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2v-6H9.83L12 9.83 14.17 12H13z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 4h14v2H5zM5 14h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2v-6H9.83L12 9.83 14.17 12H13z" /></g>
    </Icon>
  );
}
