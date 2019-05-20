
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewArray (props) {
  return (
    <Icon {...props}>
      <path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
