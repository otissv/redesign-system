
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function TextFieldsTwoTone (props) {
  return (
    <Icon {...props}>
      <path d="M12.5 12h3v7h3v-7h3V9h-9z" /><path d="M15.5 4h-13v3h5v12h3V7h5z" /><path d="M12.5 12h3v7h3v-7h3V9h-9z" /><path d="M15.5 4h-13v3h5v12h3V7h5z" />
    </Icon>
  );
}
