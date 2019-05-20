
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function DeleteSweepOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M15 16h4v2h-4zM15 8h7v2h-7zM15 12h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zM10 4H6L5 5H2v2h12V5h-3z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M15 16h4v2h-4zM15 8h7v2h-7zM15 12h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zM10 4H6L5 5H2v2h12V5h-3z" />
    </Icon>
  );
}
