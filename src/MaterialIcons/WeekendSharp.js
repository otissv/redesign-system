
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function WeekendSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 9.03V14h12V9.03h2V5H4v4.03z" /><path d="M19 15H5v-4.97H1V19h22v-8.97h-4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 9.03V14h12V9.03h2V5H4v4.03z" /><path d="M19 15H5v-4.97H1V19h22v-8.97h-4z" />
    </Icon>
  );
}
