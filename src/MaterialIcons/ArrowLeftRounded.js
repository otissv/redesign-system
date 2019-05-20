
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function ArrowLeftRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M24 0v24H0V0h24z" opacity=".87" /><path d="M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z" /><path fill="none" d="M24 0v24H0V0h24z" opacity=".87" /><path d="M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z" />
    </Icon>
  );
}
