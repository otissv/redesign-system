
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatColorTextTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path fillOpacity=".36" d="M0 20h24v4H0z" /><path d="M5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2L5.5 17zm8.88-5H9.62L12 5.67 14.38 12z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path fillOpacity=".36" d="M0 20h24v4H0z" /><path d="M5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2L5.5 17zm8.88-5H9.62L12 5.67 14.38 12z" /></g>
    </Icon>
  );
}
