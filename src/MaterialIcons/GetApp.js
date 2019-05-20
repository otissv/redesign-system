
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function GetApp (props) {
  return (
    <Icon {...props}>
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /><path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  );
}
