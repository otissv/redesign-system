
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SubscriptionsTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 20h16v-8H4v8zm6-7.27L16 16l-6 3.26v-6.53z" opacity=".3" /><path d="M4 6h16v2H4zM6 2h12v2H6zM20 10H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8z" /><path d="M10 12.73v6.53L16 16z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 20h16v-8H4v8zm6-7.27L16 16l-6 3.26v-6.53z" opacity=".3" /><path d="M4 6h16v2H4zM6 2h12v2H6zM20 10H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8z" /><path d="M10 12.73v6.53L16 16z" />
    </Icon>
  );
}
