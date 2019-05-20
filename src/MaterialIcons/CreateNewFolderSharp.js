
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CreateNewFolderSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M22 6H12l-2-2H2v16h20V6zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M22 6H12l-2-2H2v16h20V6zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z" />
    </Icon>
  );
}
