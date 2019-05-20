
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FontDownloadSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M9.93 13.5h4.14L12 7.98 9.93 13.5zM22 2H2v20h20V2zm-6.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9.93 13.5h4.14L12 7.98 9.93 13.5zM22 2H2v20h20V2zm-6.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
    </Icon>
  );
}
