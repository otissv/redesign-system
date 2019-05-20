
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function FileCopyOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z" /><path d="M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z" /><path d="M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z" />
    </Icon>
  );
}
