
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewColumnTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><g opacity=".3"><path d="M6 7h3v9H6zM11 7h3v9h-3zM16 7h3v9h-3z" /></g><path d="M4 5v13h17V5H4zm5 11H6V7h3v9zm5 0h-3V7h3v9zm5 0h-3V7h3v9z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><g opacity=".3"><path d="M6 7h3v9H6zM11 7h3v9h-3zM16 7h3v9h-3z" /></g><path d="M4 5v13h17V5H4zm5 11H6V7h3v9zm5 0h-3V7h3v9zm5 0h-3V7h3v9z" /></g>
    </Icon>
  );
}
