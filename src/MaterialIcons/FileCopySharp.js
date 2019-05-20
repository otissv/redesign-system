
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FileCopySharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
    </Icon>
  );
}
