
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SignalCellularAlt (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0z" /><path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z" /><path fill="none" d="M0 0h24v24H0z" /><path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z" />
    </Icon>
  );
}
