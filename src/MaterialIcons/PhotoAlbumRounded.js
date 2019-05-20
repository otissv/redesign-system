
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PhotoAlbumRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm.63 14.19l1.99-2.56c.2-.25.58-.26.78-.01l1.74 2.1 2.6-3.34c.2-.26.6-.26.79.01l2.87 3.82c.25.33.01.8-.4.8H7.02c-.41-.01-.65-.49-.39-.82z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm.63 14.19l1.99-2.56c.2-.25.58-.26.78-.01l1.74 2.1 2.6-3.34c.2-.26.6-.26.79.01l2.87 3.82c.25.33.01.8-.4.8H7.02c-.41-.01-.65-.49-.39-.82z" /></g>
    </Icon>
  );
}
