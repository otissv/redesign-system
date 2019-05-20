
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ViewStreamTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><g opacity=".3"><path d="M6 13h13v3H6zM6 8h13v3H6z" /></g><path d="M4 6v12h17V6H4zm15 10H6v-3h13v3zm0-5H6V8h13v3z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><g opacity=".3"><path d="M6 13h13v3H6zM6 8h13v3H6z" /></g><path d="M4 6v12h17V6H4zm15 10H6v-3h13v3zm0-5H6V8h13v3z" /></g>
    </Icon>
  );
}
