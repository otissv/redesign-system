
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FeaturedPlayListSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M23 3H1v18h22V3zm-11 8H3V9h9v2zm0-4H3V5h9v2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M23 3H1v18h22V3zm-11 8H3V9h9v2zm0-4H3V5h9v2z" />
    </Icon>
  );
}
