
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewStream (props) {
  return (
    <Icon {...props}>
      <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
