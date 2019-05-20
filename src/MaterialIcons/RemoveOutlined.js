
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function RemoveOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" />
    </Icon>
  );
}
