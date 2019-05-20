
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function CollectionsBookmark (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z" />
    </Icon>
  );
}
