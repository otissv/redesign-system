
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function SubdirectoryArrowRightOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M24 24H0V0h24v24z" opacity=".87" /><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" /><path fill="none" d="M24 24H0V0h24v24z" opacity=".87" /><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" />
    </Icon>
  );
}
