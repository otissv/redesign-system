
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ShortTextTwoTone (props) {
  return (
    <Icon {...props}>
      <path d="M4 9h16v2H4zM4 13h10v2H4z" /><path d="M4 9h16v2H4zM4 13h10v2H4z" />
    </Icon>
  );
}
