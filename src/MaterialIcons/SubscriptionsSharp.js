
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SubscriptionsSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 8v12H2V10h20zm-6 6l-6-3.27v6.53L16 16z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 8v12H2V10h20zm-6 6l-6-3.27v6.53L16 16z" />
    </Icon>
  );
}
