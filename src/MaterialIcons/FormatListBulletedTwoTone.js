
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FormatListBulletedTwoTone (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M7 5h14v2H7z" /><circle cx="4" cy="6" r="1.5" /><path d="M7 11h14v2H7zM7 17h14v2H7zM4 19.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z" /><circle cx="4" cy="12" r="1.5" /></g>,<path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M7 5h14v2H7z" /><circle cx="4" cy="6" r="1.5" /><path d="M7 11h14v2H7zM7 17h14v2H7zM4 19.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z" /><circle cx="4" cy="12" r="1.5" /></g>
    </Icon>
  );
}
