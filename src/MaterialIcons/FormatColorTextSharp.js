
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatColorTextSharp (props) {
  return (
    <Icon {...props}>
      <path fillOpacity=".36" d="M0 20h24v4H0v-4z" /><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z" /><path fillOpacity=".36" d="M0 20h24v4H0v-4z" /><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z" />
    </Icon>
  );
}
