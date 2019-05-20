
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewArrayTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4 5h3v13H4zM18 5h3v13h-3zM8 18h9V5H8v13zm2-11h5v9h-5V7z" /><path d="M10 7h5v9h-5z" opacity=".3" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M4 5h3v13H4zM18 5h3v13h-3zM8 18h9V5H8v13zm2-11h5v9h-5V7z" /><path d="M10 7h5v9h-5z" opacity=".3" /></g>
    </Icon>
  );
}
