
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function Home (props) {
  return (
    <Icon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
