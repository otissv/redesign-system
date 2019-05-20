
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function TransitEnterexit (props) {
  return (
    <Icon {...props}>
      <path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
