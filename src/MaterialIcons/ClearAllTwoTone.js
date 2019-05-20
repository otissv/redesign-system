
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ClearAllTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 11h14v2H5zM3 15h14v2H3zM7 7h14v2H7z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M5 11h14v2H5zM3 15h14v2H3zM7 7h14v2H7z" /></g>
    </Icon>
  );
}
