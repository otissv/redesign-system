
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function StoreTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M5.64 9l-.6 3h13.92l-.6-3z" opacity=".3" /><path d="M4 4h16v2H4zM20 7H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm-8 11H6v-4h6v4zm-6.96-6l.6-3h12.72l.6 3H5.04z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M5.64 9l-.6 3h13.92l-.6-3z" opacity=".3" /><path d="M4 4h16v2H4zM20 7H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm-8 11H6v-4h6v4zm-6.96-6l.6-3h12.72l.6 3H5.04z" />
    </Icon>
  );
}