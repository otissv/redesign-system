
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function NearMeTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M11.39 12.61l.32.83 1.32 3.42 4.24-10.13-10.13 4.24 3.42 1.33z" opacity=".3" /><path d="M3 11.51l6.84 2.65L12.48 21h.98L21 3 3 10.53v.98zm14.27-4.78l-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M11.39 12.61l.32.83 1.32 3.42 4.24-10.13-10.13 4.24 3.42 1.33z" opacity=".3" /><path d="M3 11.51l6.84 2.65L12.48 21h.98L21 3 3 10.53v.98zm14.27-4.78l-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23z" />
    </Icon>
  );
}
