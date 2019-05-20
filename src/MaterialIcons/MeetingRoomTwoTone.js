
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function MeetingRoomTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M7 19h6V5H7v14zm3-8h2v2h-2v-2z" opacity=".3" /><path d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14z" /><path d="M10 11h2v2h-2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M7 19h6V5H7v14zm3-8h2v2h-2v-2z" opacity=".3" /><path d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14z" /><path d="M10 11h2v2h-2z" />
    </Icon>
  );
}
