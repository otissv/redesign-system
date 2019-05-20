
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function NoteSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M22 10l-6-6H2v16h20V10zm-7-4.5l5.5 5.5H15V5.5z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M22 10l-6-6H2v16h20V10zm-7-4.5l5.5 5.5H15V5.5z" />
    </Icon>
  );
}
