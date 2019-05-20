
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeConsumer } from '../ThemeContext';
import Icon from '../Icon/Icon';

export function EditLocationOutlined (props) {
  return (
    <Icon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 1C7.59 1 4 4.59 4 9c0 5.57 6.96 13.34 7.26 13.67l.74.82.74-.82C13.04 22.34 20 14.57 20 9c0-4.41-3.59-8-8-8zm0 19.47C9.82 17.86 6 12.54 6 9c0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.83-4.25 9.36-6 11.47z" /><path d="M8.51 11.05v1.44h1.44l3.92-3.93-1.43-1.43zM14.39 5.71c-.15-.15-.39-.15-.54 0l-.7.7 1.44 1.44.7-.7c.15-.15.15-.39 0-.54l-.9-.9z" /><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 1C7.59 1 4 4.59 4 9c0 5.57 6.96 13.34 7.26 13.67l.74.82.74-.82C13.04 22.34 20 14.57 20 9c0-4.41-3.59-8-8-8zm0 19.47C9.82 17.86 6 12.54 6 9c0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.83-4.25 9.36-6 11.47z" /><path d="M8.51 11.05v1.44h1.44l3.92-3.93-1.43-1.43zM14.39 5.71c-.15-.15-.39-.15-.54 0l-.7.7 1.44 1.44.7-.7c.15-.15.15-.39 0-.54l-.9-.9z" />
    </Icon>
  );
}
