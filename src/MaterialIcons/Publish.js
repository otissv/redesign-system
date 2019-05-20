
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Publish (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
    </Icon>
  );
}
