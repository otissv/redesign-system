
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function NavigationSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
    </Icon>
  );
}
