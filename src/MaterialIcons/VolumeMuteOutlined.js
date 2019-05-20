
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function VolumeMuteOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z" />
    </Icon>
  );
}
