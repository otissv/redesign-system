
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function KitchenSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 2.01L4 2v20h16V2.01zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8V5zm0 7h2v5H8v-5z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 2.01L4 2v20h16V2.01zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8V5zm0 7h2v5H8v-5z" />
    </Icon>
  );
}
