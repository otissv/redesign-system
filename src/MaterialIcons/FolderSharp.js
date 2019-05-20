
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FolderSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M10 4H2v16h20V6H12l-2-2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M10 4H2v16h20V6H12l-2-2z" />
    </Icon>
  );
}
