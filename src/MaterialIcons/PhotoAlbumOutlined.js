
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function PhotoAlbumOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 2v5l-1-.75L9 9V4h2zm7 16H6V4h1v9l3-2.25L13 13V4h5v16z" /><path d="M11.28 17.96L9.5 15.81 7 19h10l-3.22-4.26z" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 2v5l-1-.75L9 9V4h2zm7 16H6V4h1v9l3-2.25L13 13V4h5v16z" /><path d="M11.28 17.96L9.5 15.81 7 19h10l-3.22-4.26z" /></g>
    </Icon>
  );
}
