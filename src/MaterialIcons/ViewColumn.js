
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewColumn (props) {
  return (
    <Icon {...props}>
      <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
