
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function QueueTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M8 16h12V4H8v12zm1-7h4V5h2v4h4v2h-4v4h-2v-4H9V9z" opacity=".3" /><path d="M2 20c0 1.1.9 2 2 2h14v-2H4V6H2v14z" /><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" /><path d="M13 15h2v-4h4V9h-4V5h-2v4H9v2h4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M8 16h12V4H8v12zm1-7h4V5h2v4h4v2h-4v4h-2v-4H9V9z" opacity=".3" /><path d="M2 20c0 1.1.9 2 2 2h14v-2H4V6H2v14z" /><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" /><path d="M13 15h2v-4h4V9h-4V5h-2v4H9v2h4z" />
    </Icon>
  );
}
