
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CropSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M17 15h2V5H9v2h8v8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2H7z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M17 15h2V5H9v2h8v8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2H7z" /></g>
    </Icon>
  );
}
