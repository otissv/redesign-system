
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FolderOpenSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M22 6H12l-2-2H2v16h20V6zm-2 12H4V8h16v10z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M22 6H12l-2-2H2v16h20V6zm-2 12H4V8h16v10z" />
    </Icon>
  );
}
