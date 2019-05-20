
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function KeyboardCapslock (props) {
  return (
    <Icon {...props}>
      <path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
