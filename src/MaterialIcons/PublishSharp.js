
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PublishSharp (props) {
  return (
    <Icon {...props}>
      <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" /><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
    </Icon>
  );
}
