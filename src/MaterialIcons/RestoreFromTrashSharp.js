
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function RestoreFromTrashSharp (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 21h12V7H6v14zm6-11l4 4h-2v4h-4v-4H8l4-4zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M6 21h12V7H6v14zm6-11l4 4h-2v4h-4v-4H8l4-4zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
    </Icon>
  );
}
