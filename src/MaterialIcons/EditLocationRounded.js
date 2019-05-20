
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function EditLocationRounded (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2C8.14 2 5 5.14 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.86-3.14-7-7-7zM9.95 12.49H8.51v-1.44l3.93-3.92 1.43 1.43-3.92 3.93zm5.34-5.34l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2C8.14 2 5 5.14 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.86-3.14-7-7-7zM9.95 12.49H8.51v-1.44l3.93-3.92 1.43 1.43-3.92 3.93zm5.34-5.34l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z" />
    </Icon>
  );
}
